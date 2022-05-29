import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceController } from './resource.controller';
import { ResourceEntity } from './resource.entity';
import { SourcesService } from './resource.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceEntity])],
  controllers: [ResourceController],
  providers: [SourcesService],
})
export class ResourceModule {}
