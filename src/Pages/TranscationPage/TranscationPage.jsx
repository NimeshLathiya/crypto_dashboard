import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

import DashBoardLayout from "../../Components/DashBoardLayout";
import TranscationTable from "./Components/TranscationTable";
import { IoIosSearch } from "react-icons/io";

const TranscationPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashBoardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload} />}>
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="16.5rem" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={IoIosSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or destination" />
            </InputGroup>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TranscationTable />
            </TabPanel>
            <TabPanel>
              <TranscationTable />
            </TabPanel>
            <TabPanel>
              <TranscationTable />
            </TabPanel>{" "}
            <TabPanel>
              <TranscationTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashBoardLayout>
  );
};

export default TranscationPage;
