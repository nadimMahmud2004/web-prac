// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../features/posts/postsSlice";

// export default function Posts() {
//   const { isLoading, isError, posts, error } = useSelector(
//     (state) => state.posts,
//   );

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   let content;

//   if (isLoading) {
//     content = <h1>Loading Posts....</h1>;
//   }

//   if (!isLoading && isError) {
//     content = (
//       <h1 className="text-red-500">Something wrong happened - {error}</h1>
//     );
//   }

//   if (!isLoading && !isError) {
//     if (posts.length > 0) {
//       content = (
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       );
//     } else {
//       content = <h1>No posts found yet !</h1>;
//     }
//   }

//   return (
//     <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
//       {content}
//     </div>
//   );
// }

import { useState } from "react";

import { useGetPostsQuery } from "../features/api/apiSlice";

import Post from "./Post";

export default function Posts() {
  const [currentPostId, setCurrentPostId] = useState(null);

  const { data: posts, isLoading, isError, error } = useGetPostsQuery(10);

  let content;

  if (isLoading) {
    content = (
      <h1 className="text-2xl text-center m-4 p-4"> Loading posts...</h1>
    );
  }

  if (!isLoading && isError) {
    content = (
      <h1 className="text-red-500 text-2xl text-center m-4 p-4">
        Something wrong happened - {error}
      </h1>
    );
  }

  if (!isLoading && !isError) {
    if (posts.length > 0) {
      content = (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href="#" onClick={() => setCurrentPostId(post.id)}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      );
    } else {
      content = <h1>No posts found !</h1>;
    }
  }

  return (
    <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      {content}

      {currentPostId && (
        <div className="max-w-md mx-auto mt-10 space-y-5">
          <Post id={currentPostId} />
        </div>
      )}
    </div>
  );
}
