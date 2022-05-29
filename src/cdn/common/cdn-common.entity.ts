import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Common {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  creator: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
