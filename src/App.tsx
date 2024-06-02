import { HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { useState } from "react";
// import GameGrid from "./components/GameGrid";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGeneres";
import GenereCard from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import TodoList from "./Todos/TodoList";
import PostList from "./Todos/PostList";
import TodoForm from "./Todos/TodoForm";

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
};
const App = () => {
  const [gameQuery, setgameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setgameQuery({ ...gameQuery, searchText })}
        ></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} marginTop={5}>
          <GenereCard
            onSelectGenre={(genre) => setgameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}

          ></GenereCard>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading getQuery={gameQuery}></GameHeading>
        <HStack spacing={5} paddingLeft={2} marginBottom={5} marginTop={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onselectedPlatform={(platform) =>
              setgameQuery({ ...gameQuery, platform })
            }
          ></PlatformSelector>
          <SortSelector></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );

  // React course Part 2 Started Here...
  // return <PostList></PostList>;
  // return (
  //   <>
  //     <TodoForm></TodoForm>
  //     <TodoList></TodoList>
  //   </>
  // );
};

export default App;
