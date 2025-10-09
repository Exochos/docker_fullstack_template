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
      <div className="h-40 w-full mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
        <img src={images} alt="Post image" className="h-full w-full object-cover" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 flex-grow">{content}</p>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">by {author}</div>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        ❤️ {upvotes} ⬇️ {downvotes}
      </div>
    </div>
  );
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("guest");
  const [images, setImages] = useState("https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg");

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = { title, content, author, images };

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (!res.ok) throw new Error("Failed to create post");

      const saved = await res.json();
      setPosts((prev) => [...prev, saved]);

      // clear form
      setTitle("");
      setContent("");
      setImages("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Puppy Posts
      </h1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No posts yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>
      )}

      {/* New Post Form */}
      <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 text-center">
          Add a Puppy Post!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="border border-gray-300 rounded px-3 py-2 w-full h-24 resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
          >
            Post it!
          </button>
        </form>
      </div>
    </main>
  );
}
