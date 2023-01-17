import React from "react";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import { FaQuoteLeft } from "react-icons/fa";

export const ClientCard = ({ name, feedback, city, image, isMiddle }) => {
  return (
    <Box
      // border="2px solid var(--color-dark-blue)"
      p={2}
      display="flex"
      flexDirection="column"
      borderRadius="0.5rem"
      mt={isMiddle && {xs:0, md:3}}
      backgroundColor={isMiddle ? "var(--color-dark-blue)" : "var(--color-pure-white)"}
      boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 10px"}
    >
      <FaQuoteLeft color="var(--color-light-blue)" size={20} />
      <Box textAlign="center" p={2}>
        <Typography
          variant="p"
          style={{ fontWeight: "500", fontStyle: "italic" }}
          color={
            isMiddle ? "var(--color-pure-white)" : "var(--color-dark-blue)"
          }
        >
          {feedback}
        </Typography>
      </Box>

      <Box display="flex" mt={2}>
        <Box mr={2}>
          <Avatar
            variant={"rounded"}
            alt="The image"
            src={image}
            style={{
              width: "4rem",
              height: "4rem",
            }}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography
            variant="h6"
            fontWeight="bold"
            color={
              isMiddle ? "var(--color-pure-white)" : "var(--color-dark-blue)"
            }
          >
            {name}
          </Typography>
          <Typography
            variant="p"
            fontWeight="bold"
            color="var(--color-light-blue)"
          >
            {city}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
