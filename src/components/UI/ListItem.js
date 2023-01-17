import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const ListItem = ({ text, whiteText, variant, fontWeight }) => {
  return (
    <Box mt={3} display="flex" alignItems={"center"}>
      <FaCheckSquare color="var(--color-light-blue)" size={25} />
      <Typography
        variant={variant}
        color={whiteText ? "var(--color-white)" : "var(--color-dark-blue)"}
        ml={2}
        fontWeight={fontWeight}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ListItem;
