// import React from "react";
// import apiclient from "../services/api-client";
// import { useState, useEffect } from "react";
// import { useGame } from "../hooks/useGame";
// import GameCard from "./GameCard";
// import { SimpleGrid } from "@chakra-ui/react";

// const GameGrid = () => {
//   const { games, error } = useGame();

//   return (
//     <>
//       <SimpleGrid
//         // columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
//         padding="10px"
//         spacing={10}
//       >
//         {games.map((game) => (
//           <GameCard key={game.id} game={game}></GameCard>
//         ))}
//       </SimpleGrid>
//     </>
//   );
// };

// export default GameGrid;

import { SimpleGrid, Text } from "@chakra-ui/react";
// import useGames from "../hooks/useGames";
// import { useGame } from "../hooks/useGame";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
// import { Genre } from "../hooks/useGeneres";
import { GameQuery } from "../App";

interface Props {
  // selectedGenre: Genre | null;
  // selectedPlatform:Platform | null;
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  // const {games, error} = useGames();
  const { data, error } = useGames(gameQuery);

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={3}
    >
      {data.map((game) => (
        <div key={game.id}>
          <li>{game.name}</li>
          <GameCard key={game.id} game={game} />
        </div>
      ))}
    </SimpleGrid>
  );
};
export default GameGrid;
