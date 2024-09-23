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
              Co je to neřízený protlak?
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
              Neřízený protlak je pneumatický zemní protlak bez možnosti
              přímého řízení směru. Pro zahájení protlaku se vykope vstupní
              pracovní jáma a na konci plánovaného protlaku výstupní jáma. Ve
              vstupní jámě je umístěna tzv. raketa, která je zaměřena na cíl
              protlaku.
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
              Jaká je doba realizace projektu?
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
              Doba realizace projektu závisí na jeho velikosti, specifikách
              zakázky a podmínkách na místě. Menší projekty mohou být dokončeny
              během několika dní, zatímco rozsáhlejší projekty mohou trvat týdny
              až měsíce. Faktory jako počasí, dostupnost materiálu a koordinace
              s ostatními řemeslníky mohou ovlivnit časový plán. Po důkladné
              analýze vašich požadavků vám poskytneme odhad doby realizace.
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
              Nabízíte silnoproud nebo pouze slaboproud?
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
              Nabízíme služby v oblasti silnoproudých i slaboproudých
              elektroinstalací. Náš tým je připraven vám poskytnout kompletní
              řešení na míru, ať už jde o domácnosti, kanceláře nebo
              komerční prostory. Kontaktujte nás pro více informací a konkrétní
              nabídku služeb.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};