import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://se-book-store.herokuapp.com/api/",
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `v1/books`,
    }),
    getBooksByID: builder.query({
      query: (isbn) => `v1/books/${isbn}`,
    }),
  }),
});

export const { useGetAllBooksQuery, useGetBooksByIDQuery } = booksApi;
