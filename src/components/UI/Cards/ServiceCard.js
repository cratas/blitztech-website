import React from "react";
import classes from "../UICommon.module.css";
import { Box } from "@mui/system";
import { Avatar, Card, Typography } from "@mui/material";

export const ServiceCard = ({
  text,
  title,
  image,
  titleColor,
  textColor,
  customFontWeight,
}) => {
  return (
    <Box
      boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 10px"}
      borderRadius={"0.5rem"}
      variant="outlined"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      textAlign="center"
      className={classes.serviceCard}
    >
      <Typography
        pb={2}
        variant="h5"
        style={{
          fontWeight: "bold",
          color: titleColor ?? "var(--color-dark-blue)",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="p"
        style={{
          fontWeight: customFontWeight ?? "500",
          color: textColor ?? "var(--color-grey)",
          textAlign: 'left',
          lineHeight: "1.2rem",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
