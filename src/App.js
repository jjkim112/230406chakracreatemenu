import {
  ChakraProvider,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { PhoneIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ChakraProvider>
      <Box>Hello,Chakra UI~</Box>
      <Box color="red.400">버툰</Box>
      <Button
        isLoading={isLoading}
        colorScheme="facebook"
        leftIcon={<PhoneIcon />}
        variant={"solid"}
      >
        버 튼
      </Button>
      <Menu>
        <MenuButton
          colorScheme="green"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          저녁 메뉴
        </MenuButton>

        <MenuList>
          <MenuGroup title="파스타">
            <MenuItem>크림파스타</MenuItem>
            <MenuItem>알리오올리오</MenuItem>
            <MenuItem>토마토파스타</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="치킨">
            <MenuItem>양념치킨</MenuItem>
            <MenuItem>후라이드치킨</MenuItem>
            <MenuItem>꾸브라꼬치킨</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="피자">
            <MenuItem>페퍼로니피자</MenuItem>
            <MenuItem>치즈피자</MenuItem>
            <MenuItem>치즈바이트피자</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
}

export default App;
