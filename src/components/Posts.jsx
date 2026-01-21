import React, { useState } from "react";
import { useGetPostsQuery } from "../features/api/apiSlice";
import { Post } from "./Post";
import AddPost from "./AddPost";

const Posts = () => {
  const { data: posts = [], isLoading, isError, error } = useGetPostsQuery(10);

  const [currentPostId, setCurrentPostId] = useState(null);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {error?.error || "Something went wrong"}</h1>;

  return (
    <>
      <div className="w-full px-10 mx-auto bg-gray-200 shadow-sm">
        <ul className="text-center py-10">
          {posts.map((post) => (
            <li key={post.id} className="p-2 m-3">
              {post.title}
              <button
                onClick={() => setCurrentPostId(post.id)}
                className="px-2 py-1 mx-3 bg-black text-white rounded-md"
              >
                Show Body
              </button>
            </li>
          ))}
        </ul>
      </div>

      {currentPostId && (
        <div className="max-w-md mx-auto mt-10 space-y-10">
          <Post id={currentPostId} />
        </div>
      )}
      <div className="max-w-md mx-auto mt-10 space-y-10">
        <AddPost />
      </div>
    </>
  );
};

export default Posts;
