import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Menu,
  Box,
  Button,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      px={4}
      py={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <NextLink href="/">
        <Text
          fontSize="3xl"
          as="b"
          bgGradient="linear(to-r, pink.500, purple.500)"
          bgClip="text"
          letterSpacing={2}
        >
          Portfolio
        </Text>
      </NextLink>

      <Box display="flex" gap={2}>
        <Button size="md" onClick={toggleColorMode}>
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Menu>
          <MenuButton size="md" as={Button}>
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem as={NextLink} href="/">
              Home
            </MenuItem>
            <MenuItem as={NextLink} href="/work">
              Work
            </MenuItem>
            <MenuItem as={NextLink} href="/about">
              About
            </MenuItem>
            <MenuItem as={NextLink} href="#footer">
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
