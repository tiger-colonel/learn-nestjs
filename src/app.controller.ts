import { Get, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('公共接口')
@Controller()
export class AppController {
  @Get()
  root(): string {
    return 'Hello World!';
  }
}
