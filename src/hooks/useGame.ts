import { GameQuery } from './../App';
import useData from "./useData";
// import { GameQuery } from "../App";

export type Platform={
    id:number,
    name:string,
    slug:string
}
export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{platform:Platform}[];
  metacritic:number;
};
// type FetchGamesResponse = {
//   count: number;
//   results: Game[];
// };
const useGames = (gameQuery:GameQuery) =>
  useData<Game>("/games", { params: { genres: gameQuery.genre?.id,platforms:gameQuery.platform?.id,search:gameQuery.searchText } }, [
    gameQuery
  ]);
  export default useGames;