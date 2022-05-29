import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { whiteUsers } from '../common';
import { ResourceEntity } from './resource.entity';

export interface SourcesRo {
  list: ResourceEntity[];
  count: number;
  creator: string;
}

@Injectable()
export class SourcesService {
  constructor(
    @InjectRepository(ResourceEntity)
    private readonly resourceEntity: Repository<ResourceEntity>,
  ) {}

  // 临时方案
  getAuth({ username }) {
    return { hasAuth: whiteUsers.includes(username) };
  }

  /**
   * 新增资源
   */
  async create(source: Partial<ResourceEntity>): Promise<ResourceEntity> {
    return await this.resourceEntity.save(source);
  }

  /**
   * 获取资源
   */
  async querySources(source: Partial<ResourceEntity>): Promise<SourcesRo> {
    const { creator } = source;
    const qb = await this.resourceEntity.createQueryBuilder('resource');
    qb.orderBy('id', 'DESC');

    if (creator) {
      qb.where({ creator });
    }

    const list = await qb.getMany();
    return { list, count: list.length, creator };
  }
}
