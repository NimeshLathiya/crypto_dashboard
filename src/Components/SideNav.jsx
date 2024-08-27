import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  console.log("location",location );

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      height="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="1.25rem" as="h1" pt="3.5rem">
          @nimesh lathiya
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                  fontWeight: "medium",
                  cursor: "pointer",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="0.875rem" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
              fontWeight: "medium",
              cursor: "pointer",
            }}
          >
            <Icon as={MdOutlineSupportAgent} />
            <Text fontSize="0.875rem" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
