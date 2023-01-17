import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Heading } from "../../UI/Heading";
import MyButton from "../../UI/MyButton";
import image from "./../../../assets/photovoltaic-house.png";
import { Container } from "react-bootstrap";
import { navActions } from "../../../redux/navSlice";

import ListItem from "../../UI/ListItem";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PhotovoltaicsHeader = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Heading
        miniTitle="Fotovoltaika"
        title={
          <span>
            <span style={{ color: "var(--color-light-blue)" }}>
              Fotovoltaická
            </span>{" "}
            elektrárna pro
            <br /> rodinný
            <span style={{ color: "var(--color-light-blue)" }}> dům </span>
          </span>
        }
        miniTitleColor="var(--color-light-grey)"
        titleColor="var(--color-dark-blue)"
        variant="h3"
      />

      <Box
        width="100%"
        display="flex"
        marginBottom={5}
        flexDirection={{
          xs: "column",
          md: "row",
        }}
        data-aos={"fade-left"}
      >
        <Box width={{ xs: "100%", md: "65%" }}>
          <Avatar
            variant={"rounded"}
            alt="The image"
            src={image}
            style={{
              width: "100%",
              height: "100%",
              zIndex: "0",
            }}
          />
        </Box>
        <Box
          width={{ xs: "100%", md: "35%" }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          textAlign={{
            xs: "center",
            md: "left",
          }}
          alignItems={{
            xs: "center",
            md: "flex-start",
          }}
          pt={3}
        >
          <Box display="flex" flexDirection={"column"} alignItems="flex-start">
            <ListItem
              text={
                <span>
                  Roční průměrná úspora <br />
                  až 80% nákladů.
                </span>
              }
              variant="h5"
              fontWeight={"bold"}
            />
            <ListItem
              text={
                <span>
                  Garantujeme získání <br />
                  státní dotace.
                </span>
              }
              variant="h5"
              fontWeight={"bold"}
            />
            <ListItem
              text={
                <span>
                  Vše zařídíme za Vás,
                  <br /> řešení na klíč bez starostí.
                </span>
              }
              variant="h5"
              fontWeight={"bold"}
            />
          </Box>
          <Box mt={7}>
            <Link to="/contact">
              <MyButton
                text="Sjednat konzultaci"
                onButtonClick={() => dispatch(navActions.linkContact())}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PhotovoltaicsHeader;
