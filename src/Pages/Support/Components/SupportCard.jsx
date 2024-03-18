import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { HiMail } from "react-icons/hi";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={icon} boxSize={7} color="p.purple" />
        <Text as="h1" textStyle="h1" fontWeight="medium">
          {title}
        </Text>
        <Text as="h6" fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
