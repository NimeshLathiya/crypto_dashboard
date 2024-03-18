import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const TranscationTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "18-03-2024",
      time: "09:22 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA4H",
      date: "19-03-2024",
      time: "09:52 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "Processing",
    },
    {
      id: "HD82NA5H",
      date: "20-03-2024",
      time: "10:22 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "Cancelled",
    },
    {
      id: "HD82NA6H",
      date: "21-03-2024",
      time: "10:52 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "Completed",
    },
    {
      id: "HD82NA7H",
      date: "22-03-2024",
      time: "12:22 PM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "Completed",
    },
    {
      id: "HD82NA8H",
      date: "25-03-2024",
      time: "01:52 PM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "Completed",
    },
  ];

  const statusColor = {
    Pending: "#797E82",
    Processing: "#F5A50B",
    Cancelled: "#DC2626",
    Completed: "#059669",
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="md" fontWeight="medium">
                {data.id}
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="md" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="sm" color="black.60">
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="md" fontWeight="medium    ">
                    {data.type.name}
                  </Text>
                  <Text fontSize="sm" color="black.60">
                    {data.type?.tag}
                  </Text>
                </Stack>
              </Td>
              <Td fontSize="md" fontWeight="medium">
                {data.amount}
              </Td>
              <Td fontSize="md" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                  py="2"
                  px="4"
                >
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TranscationTable;
