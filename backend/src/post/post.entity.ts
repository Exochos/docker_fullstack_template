import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false }) // <-- ADDED: Explicitly set to false
  title: string;

  @Column({ nullable: false }) // <-- ADDED: Explicitly set to false
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ nullable: false }) // <-- ADDED: Explicitly set to false
  author: string;

  @Column({ default: 0 })
  upvotes: number;

  @Column({ default: 0 })
  downvotes: number;

  @Column({ nullable: true })
  images: string;
}
