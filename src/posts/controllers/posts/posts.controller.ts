import { Controller, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CreateUserPostDto } from 'src/posts/dtos/CreateUserPost.dto';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post(':id')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserPostDto: CreateUserPostDto,
  ) {
    return this.postService.createUserPost(id, createUserPostDto);
  }
}
