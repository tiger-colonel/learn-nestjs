import { Entity, Column } from 'typeorm';
import { Common } from '../common/cdn-common.entity';

@Entity('project')
export class ProjectEntity extends Common {
  @Column()
  business_code: number;
}
