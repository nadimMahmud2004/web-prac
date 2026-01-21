import { useGetPostQuery } from "../features/api/apiSlice";

export function Post({ id }) {
  const { data: post, isError, isLoading, error } = useGetPostQuery(id);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {error?.error || "Something went wrong"}</h1>;

  return (
    <div className="w-full p-10 mx-auto bg-red-600 text-white font-bold text-2xl shadow-sm ">
      <p>{post.body}</p>
    </div>
  );
}
