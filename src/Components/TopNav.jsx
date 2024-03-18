import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaBars, FaUserTie } from "react-icons/fa";

import React from "react";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxWidth="60rem" h="16" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          _hover={{ cursor: "pointer" }}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading
          fontWeight="medium"
          fontSize="28px"
          _hover={{ cursor: "pointer" }}
        >
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
