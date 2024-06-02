
// import { Platform } from "./useGame";
import useData from "./useData";

type Platform={
    id:number,
    name:string,
    slug:string

}


const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;