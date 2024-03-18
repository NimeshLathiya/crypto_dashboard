import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgurl, text, title, inverted }) => {
  return (
    <CustomCard
      bgImage={imgurl}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "p.purple" : "white"}
      mb="50px"
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius="full"
      >
        {title}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        color={inverted ? "white" : "black.80"}
        textStyle="h5"
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
