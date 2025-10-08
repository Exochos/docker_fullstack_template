import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @HttpPost()
  createPost(@Body() data: Partial<Post>): Promise<Post> {
    return this.postService.create(data);
  }
}
