import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostQuery={
  page:number;
  pagesize:number;
}
const UsePost=(query:PostQuery)=>{

    const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
            params:{
                _start:(query.page-1) *query.pagesize,
                _limit:query.pagesize
            }
        
      })
      .then((response) => response.data);
return useQuery<Post[], Error>({
    queryKey:['posts',query],
    queryFn: fetchPosts,
  });
}
export default UsePost;