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
  downvotes INT DEFAULT 0,
  images TEXT
);
INSERT INTO posts (title, content, created_at, author, upvotes, downvotes, images) VALUES
('cute puppy', 'Look at this adorable puppy!', '2024-01-01 10:00:00', 'user1', 5, 2, 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg'),
('playful puppy', 'This puppy loves to play!', '2024-01-02 11:00:00', 'user2', 3, 1, 'https://images.pexels.com/photos/11967013/pexels-photo-11967013.jpeg'),
('sleepy puppy', 'Just a sleepy little puppy.', '2024-01-03 12:00:00', 'user3', 8, 0, 'https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg');

/*
Attribution for images:
1. Photo by Pixabay from Pexels: https://www.pexels.com/photo/1805164/
2. Photo by Karolina Grabowska from Pexels: https://www.pexels.com/photo/11967013/
3. Photo by Taryn Elliott from Pexels: https://www.pexels.com/photo/4587996/
*/  