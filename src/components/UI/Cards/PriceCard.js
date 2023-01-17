import { Box, Typography } from "@mui/material";
import React from "react";
import MyButton from "../MyButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navActions } from "../../../redux/navSlice";
import ListItem from "../ListItem";

const PriceCard = ({ title, price, isMiddle, items, isBestSeller }) => {
  const dispatch = useDispatch();

  return (
    <Box
      p={3}
      display="flex"
      flexDirection="column"
      borderRadius="0.5rem"
      mt={isMiddle && { xs: 0, md: 3 }}
      backgroundColor={
        isMiddle ? "var(--color-dark-blue)" : "var(--color-pure-white)"
      }
      boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 10px"}
      position="relative"
    >
      {isBestSeller && (
        <Box
          width="7rem"
          textAlign="center"
          backgroundColor="var(--color-red)"
          p={1}
          borderRadius="0.5rem"
          boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 10px"}
          position="absolute"
          mt={-2.5}
          top="0"
          right="2rem"
        >
          <Typography
            variant="p"
            fontWeight="bold"
            color={"var(--color-pure-white)"}
          >
            Best seller
          </Typography>
        </Box>
      )}
      <Box
        textAlign="center"
        borderBottom={
          isMiddle
            ? "2px solid var(--color-white)"
            : "2px solid var(--color-dark-blue)"
        }
        pt={isBestSeller && 2}
        pb={1.5}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color={isMiddle ? "var(--color-white)" : "var(--color-dark-blue)"}
        >
          {title}
        </Typography>
      </Box>
      <Box py={2} textAlign="center">
        <Typography
          variant="h5"
          fontWeight="bold"
          color={isMiddle ? "var(--color-white)" : "var(--color-dark-blue)"}
        >
          <span style={{ fontSize: "1.8rem" }}>{price.substring(0, 3)}</span>
          <span style={{ color: "var(--color-light-blue)" }}>
            {price.slice(3)}
          </span>
        </Typography>
      </Box>
      <Box>
        {items?.map((itemText, key) => (
          <ListItem
            text={itemText}
            whiteText={isMiddle}
            variant="h6"
            fontWeight="500"
            key={key}
          />
        ))}
      </Box>
      <Link to="/contact">
        <Box textAlign={"center"} mt={10}>
          <MyButton
            text={"Sjednat konzultaci"}
            onButtonClick={() => dispatch(navActions.linkContact())}
          />
        </Box>
      </Link>
    </Box>
  );
};

export default PriceCard;
