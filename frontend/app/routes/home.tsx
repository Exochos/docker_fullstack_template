import { useState, useEffect } from "react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Welcome to the Puppy Posts
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300">
        Share and explore adorable puppy posts!
      </p>
      <div className="mt-8 text-center">
        <a
          href="/posts"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View Posts
        </a>
      </div>
    </main>
  );
}
