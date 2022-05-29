import { Body, Controller, Post } from '@nestjs/common';
import { SourcesRo, SourcesService } from './resource.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('资源')
@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: SourcesService) {}

  @Post('auth')
  async getAuth(@Body() params) {
    return await this.resourceService.getAuth(params);
  }

  @Post('add')
  async add(@Body() params) {
    return await this.resourceService.create(params);
  }

  @Post('query')
  async query(@Body() params): Promise<SourcesRo> {
    return await this.resourceService.querySources(params);
  }
}
