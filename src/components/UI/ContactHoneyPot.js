import React from "react";
import { Divider } from "@material-ui/core";
import { Box } from "@mui/system";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import MyButton from "./MyButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navActions } from "../../redux/navSlice";

export const ContactHoneyPot = () => {
  const dispatch = useDispatch();
  return (
    <Box
      backgroundColor={"var(--color-light-blue)"}
      mt={6}
      data-aos="fade-right"
      data-aos-delay="50"
    >
      <Container>
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          flexDirection="column"
          pt={6}
          pb={6}
        >
          <Typography
            variant="p"
            fontWeight="500"
            color="var(--color-light-grey)"
          >
            Kontaktujte nás
          </Typography>
          <Divider
            style={{
              width: "25px",
              opacity: "100%",
              height: "3px",
              backgroundColor: "var(--color-light-grey)",
              borderRadius: "2rem",
              margin: "5px",
              border: "none",
            }}
          />
          <Typography
            variant="h3"
            color="var(--color-pure-white)"
            style={{ fontWeight: "bold" }}
            textAlign="center"
            mb={5}
          >
            Kontaktujte nás a připravíme Vám
            <br /> řešení na míru bez starostí
          </Typography>
          <Link to="/contact">
            <MyButton
              text="Kontakt"
              buttonType="dark"
              onButtonClick={() => dispatch(navActions.linkContact())}
            />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
