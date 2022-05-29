import { Entity, Column } from 'typeorm';
import { Common } from '../common/cdn-common.entity';

@Entity('resource')
export class ResourceEntity extends Common {
  @Column({ default: '' })
  url: string;

  @Column()
  business_code: number;

  @Column()
  project_code: number;
}
