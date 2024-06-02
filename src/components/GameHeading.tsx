
import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

type Props = {
  getQuery: GameQuery;
};
const GameHeading = ({ getQuery }: Props) => {
  const heading = `${getQuery.genre?.name || ""} ${
    getQuery.platform?.name || ""
  } Games`;
  return (
    <>
      <Heading>{heading}</Heading>
    </>
  );
};

export default GameHeading;
