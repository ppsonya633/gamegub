
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const UseTodo=()=>{

    const fetchTodo = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.data);

      return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodo,
    staleTime:10*1000
  });
}

export default UseTodo;