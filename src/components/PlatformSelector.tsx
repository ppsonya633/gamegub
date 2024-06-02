import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGame";
type Props = {
  onselectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
};
const PlatformSelector = ({ onselectedPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatform();
  return (
    <Menu>
      <MenuButton as={Button}>
        {selectedPlatform?.name || "platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onselectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatformSelector;
