import { Box } from "@mui/system";
import React from "react";
import { Heading } from "./Heading";
import familyService from "../../assets/family.jpg";
import companyService from "../../assets/company.jpg";
import classes from "../content/home/Home.module.css";
import { DOTS_COLOURS } from "../../constants/constants";

import { Avatar } from "@mui/material";
import { Container } from "react-bootstrap";
import { DotsDesign } from "./DotsDesign";

export const ServicesIntroHeader = () => {
  return (
    <Container>
      <Box marginBottom={10}>
        <Heading
          miniTitle="Cílová skupina"
          title={
            <span>
              Kompletní řešení na míru
              <br /> pro Vaši{" "}
              <span style={{ color: "var(--color-light-blue)" }}>firmu</span> i
              Vaši
              <span style={{ color: "var(--color-light-blue)" }}>
                {" "}
                domácnost
              </span>
            </span>
          }
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-dark-blue)"
          variant="h3"
        />
        <Box display="flex" className={classes.imageWrapper} data-aos="zoom-in">
          <div className={classes.rightTopDots}>
            <DotsDesign variant={DOTS_COLOURS.dark_blue} />
          </div>
          <div className={classes.leftBottomDots}>
            <DotsDesign variant={DOTS_COLOURS.medium_blue} />
          </div>
          <Box width="50%">
            <Avatar
              variant={"rounded"}
              alt="The image"
              src={companyService}
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                zIndex: "0",
                borderBottomLeftRadius: "0.5rem",
                borderBottomRightRadius: "0",
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0",
              }}
            />
          </Box>
          <Box width="0.2rem" />
          <Box width="50%">
            <Avatar
              alt="The image"
              src={familyService}
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                zIndex: "0",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0.5rem",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0.5rem",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
