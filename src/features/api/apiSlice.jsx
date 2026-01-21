import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["postT"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit = 5) => `posts?_limit=${limit}`,
      providesTags: (result, error, arg) => [{ type: "postT", id: arg }],
    }),
    getPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["postT"],
    }),
    editPost: builder.mutation({
      query: ({ id }) => ({
        url: `posts/${id}`,
        method: "PATCH",
      }),
      providesTags: (result, error, arg) => [{ type: "postT", id: arg.id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useEditPostMutation,
} = apiSlice;
