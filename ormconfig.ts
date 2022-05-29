import { ConnectionOptions } from 'typeorm';

export default {
  name: 'default',
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'fed-tools',
  username: 'root',
  password: '123456mysql',
  entities: ['dist/**/*.entity{.ts,.js}', 'dist/**/**/*.entity{.ts,.js}'],
  synchronize: true,
} as ConnectionOptions;

// {
//   "type": "mysql",
//   "host": "127.0.0.1",
//   "port": 3306,
//   "username": "root",
//   "password": "123456mysql",
//   "database": "fed-tools",
//   "entities": ["dist/**/*.entity{.ts,.js}", "dist/**/**/*.entity{.ts,.js}"],
//   "synchronize": true
// }
