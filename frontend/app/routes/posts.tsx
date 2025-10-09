import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  upvotes: number;
  downvotes: number;
  images: string;
};

const Card = ({ title, content, author, upvotes, downvotes, images }: Post) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col">
      {/* Optional image placeholder */}
      <div className="h-40 w-full mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
        <img
          src={images}
          alt="Post image"
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 flex-grow">{content}</p>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        by {author}
      </div>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        ❤️ {upvotes} ⬇️ {downvotes}
      </div>
    </div>
  );
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Puppy Posts
      </h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No posts yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>
      )}
    </main>
  );
}
