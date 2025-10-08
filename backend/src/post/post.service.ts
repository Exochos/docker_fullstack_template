import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepo: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepo.find();
  }

  create(post: Partial<Post>): Promise<Post> {
    const newPost = this.postRepo.create(post);
    return this.postRepo.save(newPost);
  }
}
