import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/post.entity';
import { PostService } from './post/post.service';
import { PostController } from './post/post.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [Post],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
