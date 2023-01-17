import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const StatComponent = ({ mainText, title }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      margin="1rem 0"
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        color="var(--color-pure-white)"
      >
        {mainText}
      </Typography>
      <Typography variant="p" fontWeight="500" color="var(--color-light-grey)">
        {title}
      </Typography>
    </Box>
  );
};

export default StatComponent;
