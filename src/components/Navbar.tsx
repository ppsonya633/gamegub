import Logo from "/logo.webp";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={Logo} boxSize="60px"></Image>
      <Text>Navbar</Text>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
