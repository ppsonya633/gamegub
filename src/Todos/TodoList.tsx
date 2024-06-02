import axios from "axios";
import React from "react";
import { hashQueryKey, useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";
import UseTodo from "./UseTodo";

function TodoList() {
  const { data: list, error, isLoading } = UseTodo();

  if (isLoading) return <Spinner></Spinner>;

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      {list?.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </>
  );
}

export default TodoList;
