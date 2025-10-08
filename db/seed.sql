/*
  Initial SQL seed file to populate the database with posts
*/
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  author TEXT NOT NULL,
  upvotes INT DEFAULT 0,
  downvotes INT DEFAULT 0
);
INSERT INTO posts (title, content, created_at, author, upvotes, downvotes) VALUES
('First Post', 'content of the first post.', '2024-01-01 10:00:00', 'user1', 5, 2),
('Second Post', 'content of the second post.', '2024-01-02 11:00:00', 'user2', 3, 1),
('Third Post', 'content of the third post.', '2024-01-03 12:00:00', 'user3', 8, 0);
