import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const ContactInfoCard = ({ icon, text }) => {
  return (
    <Box
      textAlign="center"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
      borderRadius="0.5rem"
      py="2rem"
      backgroundColor="var(--color-pure-white)"
    
    >
      {icon}
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", marginTop: "1rem" }}
        color="var(--color-dark-blue)"
      >
        {text}
      </Typography>
    </Box>
  );
};
