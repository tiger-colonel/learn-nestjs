import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ProjectModule } from './cdn/project/project.module';
import { ResourceModule } from './cdn/resource/resource.module';
import { UserModule } from './user/user.module';
import envConfig from '../config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [envConfig.path],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        entities: ['dist/**/*.entity{.ts,.js}', 'dist/**/**/*.entity{.ts,.js}'],
        host: configService.get('DB_HOST', 'localhost'), // 主机，默认为localhost
        port: configService.get<number>('DB_PORT', 3306), // 端口号
        username: configService.get('DB_USER', 'root'), // 用户名
        password: configService.get('DB_PASSWORD', 'root'), // 密码
        database: configService.get('DB_DATABASE', 'blog'), //数据库名
        synchronize: false,
      }),
    }),
    PostsModule,
    ProjectModule,
    ResourceModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
