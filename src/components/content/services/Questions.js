import React, { useState } from "react";
import { Box } from "@mui/system";
import { Heading } from "../../UI/Heading";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "react-bootstrap";

export const Questions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionStyle = {
    marginTop: "0.3rem",
    padding: "0.7rem",
    border: "none",
    boxShadow: "none",
    "&:before": {
      backgroundColor: "transparent !important",
    },
  };

  return (
    <Box
      style={{ backgroundColor: "var(--color-pure-white)" }}
      pb={6}
      data-aos="fade-up"
    >
      <Container>
        <Heading
          miniTitle="Dotazy"
          title="Nejčastěji kladené dotazy"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-dark-blue)"
          variant="h4"
        />

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={AccordionStyle}
          style={{
            backgroundColor:
              expanded === "panel1"
                ? "var(--color-dark-blue)"
                : "var(--color-white)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                fontSize="large"
                style={{
                  color:
                    expanded === "panel1"
                      ? "var(--color-white)"
                      : "var(--color-dark-blue)",
                }}
              />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold" }}
              color="var(--color-light-grey)"
              width="5%"
              display={{ xs: "none", md: "block" }}
            >
              01
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold" }}
              color={
                expanded === "panel1"
                  ? "var(--color-white)"
                  : "var(--color-dark-blue)"
              }
            >
              Jak funguje fotovoltaika?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color={
                expanded === "panel1"
                  ? "var(--color-light-grey)"
                  : "var(--color-dark-blue)"
              }
              pl={"5%"}
            >
              Fotovoltaika představuje přeměnu slunečního záření na elektřinu
              pomocí fotovoltaického jevu. Zjednodušeně řečeno tento jev spočívá
              v tom, že fotony slunečního záření dopadají na solární články a
              svojí energií uvolňují elektrony, které vytváří elektrické napětí.
              To se při uzavření obvodu přemění na elektrický proud. Jednotlivé
              fotovoltaické články se zapojují do větších celků –
              fotovoltaických panelů. Nejpoužívanějším materiálem pro výrobu
              fotovoltaických článků je křemík.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={AccordionStyle}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{
            backgroundColor:
              expanded === "panel2"
                ? "var(--color-dark-blue)"
                : "var(--color-white)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                fontSize="large"
                style={{
                  color:
                    expanded === "panel2"
                      ? "var(--color-white)"
                      : "var(--color-dark-blue)",
                }}
              />
            }
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold" }}
              color="var(--color-light-grey)"
              width="5%"
              display={{ xs: "none", md: "block" }}
            >
              02
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold" }}
              color={
                expanded === "panel2"
                  ? "var(--color-white)"
                  : "var(--color-dark-blue)"
              }
            >
              Jaká je účinnost fotovoltaiky?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color={
                expanded === "panel2"
                  ? "var(--color-light-grey)"
                  : "var(--color-dark-blue)"
              }
              pl={"5%"}
            >
              Fotovoltaické panely, které se umisťují na střechy domů, dokážou
              přeměnit na elektřinu až 20 % solární energie. Klíčovým faktorem
              je optimální umístění fotovoltaiky na střechu. Ideální orientace
              je směrem na jih, jihozápad nebo jihovýchod, aby články pohltily
              maximum slunečních paprsků během dne. Důležitý je také sklon
              panelu, jako nejlepší se uvádí umístění na šikmou střechu se
              sklonem 35°. ýkon fotovoltaických panelů se uvádí v jednotce
              Wattpeak (Wp). To je tzv. špičkový výkon, který udává výkon při
              ideálních podmínkách. Ty jsou stanoveny na intenzitu světelného
              záření 1000 W/m2, které dopadá kolmo na fotovoltaický panel o
              teplotě 25 °C, při průzračnosti atmosféry Am = 1,5.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={AccordionStyle}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{
            backgroundColor:
              expanded === "panel3"
                ? "var(--color-dark-blue)"
                : "var(--color-white)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                fontSize="large"
                style={{
                  color:
                    expanded === "panel3"
                      ? "var(--color-white)"
                      : "var(--color-dark-blue)",
                }}
              />
            }
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold" }}
              color="var(--color-light-grey)"
              width="5%"
              display={{ xs: "none", md: "block" }}
            >
              03
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold" }}
              color={
                expanded === "panel3"
                  ? "var(--color-white)"
                  : "var(--color-dark-blue)"
              }
            >
              Kde v ČR se fotovoltaika vyplatí?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color={
                expanded === "panel3"
                  ? "var(--color-light-grey)"
                  : "var(--color-dark-blue)"
              }
              pl={"5%"}
            >
              Častým argumentem odpůrců fotovoltaiky je to, že v podmínkách
              České republiky nesvítí slunce dostatečně, aby se výroba elektřiny
              ze slunečního záření vyplatila. V Česku svítí slunce v průměru
              1330–1800 hodin za rok. Během letních měsíců u nás dopadá na jižně
              orientovanou plochu 7–8 kWh za den, v zimě je to jen 3 kWh. K
              několikanásobnému snížení intenzity záření dochází kvůli špatnému
              počasí nebo znečištění atmosféry. Obecně lze říci, že instalace
              fotovoltaiky se nejvíce vyplatí v oblasti severní Moravy, nejméně
              vhodnou lokalitou jsou severní Čechy.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={AccordionStyle}
          style={{
            backgroundColor:
              expanded === "panel4"
                ? "var(--color-dark-blue)"
                : "var(--color-white)",
          }}
        > */}
        {/* <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                fontSize="large"
                style={{
                  color:
                    expanded === "panel4"
                      ? "var(--color-white)"
                      : "var(--color-dark-blue)",
                }}
              />
            }
            aria-controls="panel4bh-content"
            id="panel3bh-header"
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold" }}
              color="var(--color-light-grey)"
              width="5%"
              display={{ xs: "none", md: "block" }}
            >
              04
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold" }}
              color={
                expanded === "panel4"
                  ? "var(--color-white)"
                  : "var(--color-dark-blue)"
              }
            >
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color={
                expanded === "panel4"
                  ? "var(--color-light-grey)"
                  : "var(--color-dark-blue)"
              }
              pl={"5%"}
            >
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails> */}
        {/* </Accordion> */}
      </Container>
    </Box>
  );
};
