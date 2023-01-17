import React from "react";
import { Box } from "@mui/system";
import { SocialIcon } from "react-social-icons";
import { Heading } from "./Heading";

export const SocialSitesContact = () => {
  return (
    <Box backgroundColor="var(--color-dark-blue)" p={6} textAlign="center">
      <Heading
        miniTitle="Sociální sítě"
        title="Sledujte nás na sociálních sítích"
        miniTitleColor="var(--color-light-grey)"
        titleColor="var(--color-pure-white)"
        variant="h5"
        noPadding={true}
      />

      <Box mt={3}>
        <SocialIcon
          url="https://instagram.com/in/jaketrent"
          bgColor="var(--color-white)"
          style={{ height: 35, width: 35, marginRight: "1rem" }}
          data-aos="fade-in"
          data-aos-delay="250"
        />
        <SocialIcon
          url="https://facebook.com/in/jaketrent"
          bgColor="var(--color-white)"
          style={{ height: 35, width: 35, marginRight: "1rem" }}
          data-aos="fade-in"
          data-aos-delay="350"
        />
        <SocialIcon
          url="https://email.com/in/jaketrent"
          bgColor="var(--color-white)"
          style={{ height: 35, width: 35 }}
          data-aos="fade-in"
          data-aos-delay="400"
        />
      </Box>
    </Box>
  );
};
