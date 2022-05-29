import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from './project.entity';

export interface ProjectRo {
  list: ProjectEntity[];
  creator: string;
}

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  /**
   * 创建项目
   */
  async create(project: Partial<ProjectEntity>): Promise<ProjectEntity> {
    const { name, business_code } = project;
    const one = await this.projectRepository.findOne({
      where: { name, business_code },
    });
    if (one) {
      throw new HttpException(`${name}已存在`, 401);
    }
    return await this.projectRepository.save(project);
  }

  /**
   * 根据用户获取项目列表
   */
  async findALlProject(params): Promise<ProjectRo> {
    const { creator } = params;
    const qb = await this.projectRepository.createQueryBuilder('project');

    const projects = await qb.getMany();
    return { list: projects, creator: creator };
  }
}
