CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  author TEXT NOT NULL,
  upvotes INT DEFAULT 0,
  downvotes INT DEFAULT 0
);

INSERT INTO posts (title, content, author, upvotes, downvotes) VALUES
('First Post', 'content of the first post.', 'user1', 5, 2),
('Second Post', 'content of the second post.', 'user2', 3, 1),
('Third Post', 'content of the third post.', 'user3', 8, 0);
