import React from "react";
import DashBoardLayout from "../../Components/DashBoardLayout";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import PortfollioSection from "./Components/PortfollioSection";
import PriceSection from "./Components/PriceSection";
import Transactions from "./Components/Transactions";
import InfoCard from "./Components/InfoCard";

const DashBoard = () => {
  return (
    <DashBoardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfollioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>

        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            imgurl="/dot_bg.png"
            title="Loans"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            imgurl="/grid_bg.png"
            title="Contact"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>
    </DashBoardLayout>
  );
};

export default DashBoard;
