import { Card, CardBody, Heading, Image,  HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GetOptimizedImages from "../services/get-images";

type Props = {
  game: Game;
};
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <CardBody>
          <Image
            src={GetOptimizedImages(game.background_image)}
            alt={game.name}
          />
          <Heading size="md">{game.name}</Heading>

          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            {/* <PlatformIconList
              // platforms={game.parent_platform.map((p) => p.platform)}
              platforms={game.parent_platform.map((p) => p.platform)}
            ></PlatformIconList> */}
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;

// import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
// import React from "react";
// // import { Game } from "../hooks/useGames";
// import { Game } from "../hooks/useGame";

// interface Props {
//   game: Game;
// }

// const GameCard = ({ game }: Props) => {
//   return (
//     <Card borderRadius={10} overflow="hidden">
//       <Image src={game.background_image} />
//       <CardBody>
//         <Heading fontSize="2xl">{game.name}</Heading>
//       </CardBody>
//     </Card>
//   );
// };

// export default GameCard;
