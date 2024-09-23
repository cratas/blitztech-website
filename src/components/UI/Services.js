import { Grid } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import MyButton from "./MyButton";
import { ServiceCard } from "./Cards/ServiceCard";
import electroImage from "../../assets/electro.png";
import diggerImage from "../../assets/digger.png";
import moleImage from "../../assets/protlakz.png";
import { Heading } from "./Heading";
import { Link } from "react-router-dom";
import { navActions } from "../../redux/navSlice";
import { useDispatch } from "react-redux";

export const Services = ({ scrollingRef }) => {
  const dispatch = useDispatch();

  return (
    <Container ref={scrollingRef} style={{ scrollMarginTop: "4rem" }}>
      <Heading
        miniTitle="O nás"
        title="Jaké služby nabízíme?"
        miniTitleColor="var(--color-light-grey)"
        titleColor="var(--color-dark-blue)"
        variant="h4"
      />

      <Grid container pb={5} spacing={5} data-aos="fade-up">
        <Grid item xs={12} md={4}>
          <ServiceCard
            text="Plánujete stavební projekt nebo potřebujete připravit terén pro další práce? Náš tým je specializovaný na výkopové práce všeho druhu. Využijte naší moderní techniky pro rychlé a kvalitní provedení výkopů. Ať už se jedná o základy, kanalizaci nebo jiné infrastrukturní projekty, jsme zde, abychom vám pomohli."
            title="Výkopové práce"
            image={diggerImage}
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="50">
          <ServiceCard
            text="Ať už plánujete novou elektroinstalaci, nebo potřebujete servis či revizi stávajícího zařízení, naši elektrikáři vám poskytnou kvalitní a odbornou pomoc. Zajišťujeme veškeré silnoproudé i slaboproudé instalace, diagnostiku a odstraňování závad. Bezpečnost, kvalita a spolehlivost jsou našimi prioritami."
            title="Elektro"
            image={electroImage}
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="100">
          <ServiceCard
            text="Neřízené protlaky mohou být komplikované a je důležité s nimi správně nakládat. Náš tým má zkušenosti s diagnostikou, preventivními opatřeními a řešením problémů spojených s neřízenými protlaky. Bezpečnost a efektivita je pro nás na prvním místě, ať už jde o domácnost nebo průmyslový objekt."
            title="Neřízené protlaky"
            image={moleImage}
          />
        </Grid>
      </Grid>

      <Box textAlign="center" data-aos="fade-in" data-aos-delay="150">
        <Link to="/services">
          <MyButton
            text="Zjistit více"
            onClick={() => dispatch(navActions.linkServices())}
          />
        </Link>
      </Box>
    </Container>
  );
};