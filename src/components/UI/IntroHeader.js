import React from "react";
import { Container } from "react-bootstrap";
import { Box } from "@mui/system";
import { Typography, Divider } from "@mui/material";
import MyButton from "./MyButton";

export const IntroHeader = ({ scrollingRef }) => {
  const handeFindOutMoreButton = () => {
    scrollingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      {/* Into text */}
      <Box textAlign="center" pt={8} data-aos="fade-up">
        <Typography
          variant="h1"
          color={"var(--color-light-blue)"}
          style={{ fontWeight: "bold" }}
        >
          Šetříme <span style={{ color: "var(--color-dark-blue)" }}>Vaše</span>
          <br />
          <span style={{ color: "var(--color-dark-blue)" }}>
            peníze 
          </span>{" "}
          za elektřinu
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <Divider
          style={{
            width: "10%",
            opacity: "100%",
            height: "0.25rem",
            color: "var(--color-light-grey)",
            borderRadius: "2rem",
            margin: "1rem",
            border: "none",
          }}
        />
      </Box>

      <Box
        textAlign="center"
        pt={2}
        display={"flex"}
        justifyContent={"center"}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Box maxWidth={"30rem"}>
          <Typography
            variant="p"
            fontWeight={"500"}
            color={"var(--color-grey)"}
          >
            Kompletní řešení fotovoltaických elektráren, které jsou schopny
            ušetřit Vám spoustu peněz, vyhnout se inflaci a v neposlední řadě
            přispět k lepšímu životnímu prostředí.
          </Typography>
        </Box>
      </Box>

      <Box
        textAlign="center"
        pt={5}
        pb={8}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <MyButton text="Zjistit více" onButtonClick={handeFindOutMoreButton} />
      </Box>
    </Container>
  );
};
