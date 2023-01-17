import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const PriceListItem = ({ text, whiteText }) => {
  return (
    <Box mt={3} display="flex" alignItems={"center"}>
      <FaCheckSquare color="var(--color-light-blue)" size={25} />
      <Typography
        variant="h6"
        color={whiteText ? "var(--color-white)" : "var(--color-dark-blue)"}
        ml={2}
        fontWeight={"500"}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default PriceListItem;
