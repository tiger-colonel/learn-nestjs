import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProjectRo, ProjectService } from './project.service';
const fac = (code, name, desc) => ({ code, name, desc });

import { ApiTags } from '@nestjs/swagger';

@ApiTags('项目')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('add')
  async create(@Body() params) {
    return this.projectService.create(params);
  }

  @Get('query')
  async findProject(@Query() query): Promise<ProjectRo> {
    return this.projectService.findALlProject(query);
  }

  @Get('query/business')
  async getAllBusiness() {
    return {
      business: [fac(1, 'Yaotai', '瑶台'), fac(2, 'Test2', '测试2')],
    };
  }
}
