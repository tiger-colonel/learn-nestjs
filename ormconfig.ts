import { ConnectionOptions } from 'typeorm';

export default {
  name: 'default',
  type: 'mysql',
  host: 'apps.danlu.netease.com',
  port: 11431,
  database: 'fed_tools',
  username: 'root',
  password: '123456@mysql',
  entities: ['dist/**/*.entity{.ts,.js}', 'dist/**/**/*.entity{.ts,.js}'],
  synchronize: true,
} as ConnectionOptions;
