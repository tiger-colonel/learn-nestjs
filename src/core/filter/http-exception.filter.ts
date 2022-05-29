import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const exceptionResponse: any = exception.getResponse();
    let validMessage = '';

    for (const key in exception) {
      console.log(key, '1', exception[key]);
    }
    if (typeof exceptionResponse === 'object') {
      validMessage =
        typeof exceptionResponse.message === 'string'
          ? exceptionResponse.message
          : exceptionResponse.message.join(';');
    }
    const message = exception.message
      ? exception.message
      : `${status >= 500 ? 'Service Error' : 'Client Error'}`;

    console.log('------message------', message);

    const errorResponse = {
      data: {},
      message: validMessage || message,
      code: -1,
    };
    response.status(status);
    response.header('Content-Type', 'applicatio/json; charset=utf-8');
    response.send(errorResponse);
  }
}
