import React from "react";
import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./UseTodo";
const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const mutation = useMutation<Todo, Error, Todo>({
    mutationFn: (newTodo: Todo) =>
      axios
        .post("https://jsonplaceholder.typicode.com/todos", newTodo)
        .then((response) => response.data),

    onSuccess: (savedtodo, variable) => {
      console.log(savedtodo);
      queryClient.setQueryData<Todo[]>(["todos"], (todo) => [
        savedtodo,
        ...(todo || []),
      ]);
      if (inputRef.current) inputRef.current.value = "";
    },
  });
  return (
    <>
      {mutation.error && (
        <div className="alert alert-danger">{mutation.error?.message}</div>
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          mutation.mutate({
            userId: 1,
            id: Math.random(),
            title: inputRef.current?.value || "",
            completed: false,
          });
        }}
      >
        <input type="text" ref={inputRef} />
        <button type="submit">
          {mutation.isLoading ? "Adding..." : "Add"}
        </button>
      </form>
    </>
  );
};

export default TodoForm;
