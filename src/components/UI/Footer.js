import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import logoWhiteImage from "../../assets/logo-white.png";
import classes from "../navbar/NavbarContainer.module.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useDispatch } from "react-redux";
import { navActions } from "../../redux/navSlice";

export const Footer = () => {
  const dispatch = useDispatch();

  return (
    <Box
      backgroundColor="var(--color-dark-blue)"
      position={"relative"}
      pt={5}
      pb={7}
    >
      <Container>
        <Box width="100%" textAlign="center" mb={4}>
          <img
            src={logoWhiteImage}
            className={classes.logo}
            alt="logo"
            style={{ width: "15rem" }}
          />
        </Box>

        <Box textAlign="center" mb={3} mt={2} fontWeight="500">
          <Link
            to="/"
            onClick={() => dispatch(navActions.linkHome())}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="p"
              color="var(--color-white)"
              style={{ marginRight: "2rem", cursor: "pointer" }}
            >
              Úvod
            </Typography>
          </Link>
          <Link
            to="/photovoltaics"
            onClick={() => dispatch(navActions.linkPhotovoltaics())}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="p"
              color="var(--color-white)"
              style={{ marginRight: "2rem" }}
            >
              Fotovoltaika
            </Typography>
          </Link>
          <Link
            to="/services"
            onClick={() => dispatch(navActions.linkServices())}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="p"
              color="var(--color-white)"
              style={{ marginRight: "2rem" }}
            >
              Služby
            </Typography>
          </Link>

          <Link
            to="/contact"
            onClick={() => dispatch(navActions.linkContact())}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="p"
              color="var(--color-white)"
              style={{ cursor: "pointer", textDecoration: "none!important" }}
              textDecoration="none"
            >
              Kontakt
            </Typography>
          </Link>
        </Box>

        <Divider
          style={{
            opacity: "30%",
            backgroundColor: "var(--color-light-grey)",
            margin: "1rem 0",
          }}
        />
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography variant="p" color="var(--color-light-grey)">
            Copyright © 2022 Blitztech s.r.o.
          </Typography>
          <Box mt={{ xs: "1rem", sm: "0" }}>
            <SocialIcon
              url="https://instagram.com/in/jaketrent"
              bgColor="var(--color-white)"
              style={{ height: 35, width: 35, marginRight: "1rem" }}
            />
            <SocialIcon
              url="https://facebook.com/in/jaketrent"
              bgColor="var(--color-white)"
              style={{ height: 35, width: 35, marginRight: "1rem" }}
            />
            <SocialIcon
              url="https://email.com/in/jaketrent"
              bgColor="var(--color-white)"
              style={{ height: 35, width: 35 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
