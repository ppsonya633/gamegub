import { Button } from "@chakra-ui/react";
// import { useData } from "../hooks/useData";
import { Genre } from "../hooks/useGeneres";
import useGeneres from "../hooks/useGeneres";
import { List, ListItem, HStack, Image, Heading } from "@chakra-ui/react";
import GetOptimizedImages from "../services/get-images";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenereCard = ({ selectedGenre, onSelectGenre }: Props) => {
  // const { generes, error } = useGeneres();
  const { data } = useGeneres();
  return (
    <>
      <Heading paddingBottom="3">Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={GetOptimizedImages(genre.image_background)}
              />
              <Button
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenereCard;
