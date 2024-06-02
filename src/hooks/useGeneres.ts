// import { useData } from "./useData";
import useData from "./useData";
export type Genre={
    id:number,
    name:string,
    image_background:string
    // slug:string
}


 const useGeneres=()=>useData<Genre>("/genres");

export default useGeneres;  
