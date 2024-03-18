import React from "react";
import DashBoardLayout from "../../Components/DashBoardLayout";
import SupportCard from "./Components/SupportCard";
import ContactCard from "./Components/ContactCard";
import { HiMail } from "react-icons/hi";
import { TbMessageCircle2 } from "react-icons/tb";
import InfoCard from "../DashBoard/Components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashBoardLayout title="Support">
      <Stack spacing="80px">
        <SupportCard
          icon={HiMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />{" "}
        <SupportCard
          icon={TbMessageCircle2}
          leftComponent={
            <InfoCard
              inverted={true}
              imgurl="/grid_bg.png"
              title="Chatbot"
              text="Chat with us now"
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashBoardLayout>
  );
};

export default Support;
