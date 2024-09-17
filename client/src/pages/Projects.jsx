import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function Projects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen w-full mx-auto flex justify-center items-center flex-col gap-6 p-3 mt-4">
      <h1 className="text-3xl font-semibold">Pojects</h1>
      <div className="w-full mx-auto p-3 flex flex-wrap gap-8 py-7 ">
        {posts && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
