import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const Step = ({ isLeftAligned, number, title, text }) => {
  const numberBox = (
    <Box width="50%" textAlign={isLeftAligned ? "left" : "right"}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="var(--color-light-grey)"
      >
        {number}
      </Typography>
    </Box>
  );

  const titleBox = (
    <Box
      width="50%"
      display="flex"
      alignItems="center"
      justifyContent={isLeftAligned ? "flex-end" : "flex-start"}
    >
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );

  const textBox = (
    <Box display="flex" alignItems="flex-start">
      <Typography
        variant="p"
        style={{ fontWeight: "500" }}
        color="var(--color-grey)"
      >
        {text}
      </Typography>
    </Box>
  );

  return (
    <Box data-aos="fade-up">
      <Box display="flex">
        {isLeftAligned ? titleBox : numberBox}

        <Box
          display="flex"
          alignItems="center"
          width="2rem"
          justifyContent="center"
          mx={1}
        >
          <Box
            width="1rem"
            height="1rem"
            backgroundColor="var(--color-light-blue)"
            borderRadius="50%"
          ></Box>
        </Box>

        {isLeftAligned ? numberBox : titleBox}
      </Box>

      <Box display="flex">
        <Box width="50%" textAlign={isLeftAligned ? "right" : "left"}>
          {isLeftAligned && textBox}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          width="2rem"
          justifyContent="center"
          mx={1}
        >
          <Box
            width="1px"
            height="100%"
            minHeight="10rem"
            backgroundColor="var(--color-light-grey)"
            borderRadius="50%"
          ></Box>
        </Box>
        <Box width="50%" textAlign={isLeftAligned ? "right" : "left"} pb={2}>
          {!isLeftAligned && textBox}
        </Box>
      </Box>
    </Box>
  );
};
