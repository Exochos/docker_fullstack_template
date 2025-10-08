import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
  .then((res) => res.json())
  .then(setPosts);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.length === 0 && <p>No posts yet.</p>}
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}