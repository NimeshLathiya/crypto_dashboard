import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";

const PriceSection = () => {
  const timestamps = [
    "07:15 PM",
    "12:55 AM",
    "06:35 AM",
    "12:15 PM",
    "05:55 PM",
  ];

  return (
    <CustomCard>
      <Flex justifyContent="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Price</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹26,670.25
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={MdArrowOutward} />
                <Text fontSize="sm" fontWeight="medium">
                  0.04%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={PiPlusCircleFill} />}>Buy</Button>
          <Button leftIcon={<Icon as={PiMinusCircleFill} />}>Sell</Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px" mt="15px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                px="10px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.png" mt="1rem" />
            <HStack justifyContent="space-between">
              {timestamps.map((time) => (
                <Text key={time} mt="15px" fontSize="sm" color="black.80">
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel>
            {" "}
            <Image w="100%" src="/graph.png" mt="1rem" />
            <HStack justifyContent="space-between">
              {timestamps.map((time) => (
                <Text key={time} mt="15px" fontSize="sm" color="black.80">
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
