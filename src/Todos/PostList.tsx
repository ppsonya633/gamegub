import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UsePost from "./UsePost";
import { useState } from "react";
import "./Todo.css";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  const [page, setpage] = useState<number>(1);
  const pagesize = 10;
  const { data: PostList, error } = UsePost({ page, pagesize });

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      {PostList?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}

      <button
        disabled={page === 1}
        onClick={() => setpage(page - 1)}
        className="btn btn-primary"
      >
        Previous
      </button>
      <button onClick={() => setpage(page + 1)} className="btn btn-primary">
        Next
      </button>
    </>
  );
};

export default PostList;
