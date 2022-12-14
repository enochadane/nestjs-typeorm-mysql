import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post';
import { User } from 'src/typeorm/entities/User';
import { PostsController } from './controllers/posts/posts.controller';
import { PostsService } from './services/posts/posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
