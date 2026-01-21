import { useState } from "react";
import { useAddPostMutation } from "../features/api/apiSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(null);

  const [addPost, { data, isError, isLoading, isSuccess }] =
    useAddPostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      title,
      body: content,
    });
    setTitle("");
    setContent("");
  };

  return (
    <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full"
          type="text"
          placeholder="Enter post title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter post content"
          className="border border-gray-300 px-4 py-2 rounded w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded w-full"
          disabled={isLoading}
        >
          Save Post
        </button>
      </form>

      {isSuccess && (
        <h1 className="text-green-700 bg-green-200">
          Post Id {data.id} was created successfully !{" "}
        </h1>
      )}
      {isError && (
        <h1 className="text-red-700 bg-red-200">
          Post Id {data.id} was created successfully !{" "}
        </h1>
      )}
    </div>
  );
};

export default AddPost;
