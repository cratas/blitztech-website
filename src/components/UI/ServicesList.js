import React from "react";
import { Box } from "@mui/system";
import { Heading } from "./Heading";
import { Service } from "./Service";
import { Container } from "react-bootstrap";
import fullBackUpImage from "../../assets/service1.jpg";
import photovoltaicService from "../../assets/service2.png";
import powerStation from "../../assets/service3.jpg";

export const ServicesList = () => {
  return (
    <Box style={{ backgroundColor: "var(--color-dark-blue)" }} pb={5}>
      <Container>
        <Heading
          miniTitle="Cílová skupina"
          title="Jaké služby nabízíme?"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-white)"
          variant="h4"
        />

        <Service
          title="Výkopové práce"
          text="Plánujete stavební projekt nebo potřebujete připravit terén pro další práce? Naše tým je specializovaný na výkopové práce všeho druhu. Využijte našeho odborného know-how a moderní techniky pro rychlé a kvalitní provedení výkopů. Ať už se jedná o základy, kanalizaci, nebo jiné infrastrukturní projekty, jsme zde, abychom vám pomohli."
          leftAligned={true}
          image={photovoltaicService}
        />
        <Service
          title="Elektro"
          text="Ať už plánujete novou elektroinstalaci nebo potřebujete servis či revizi stávajícího zařízení, naši elektři vám poskytnou kvalitní a odbornou pomoc. Zajišťujeme veškeré silnoproudé i slaboproudé instalace, diagnostiku a odstraňování závad. Bezpečnost, kvalita a spolehlivost jsou našimi hlavními prioritami."
          leftAligned={false}
          image={powerStation}
        />
        <Service
          title="Neřízené protlaky"
          text="Neřízené protlaky mohou mít mnoho příčin a je důležité se s nimi správně vypořádat. Naše tým má zkušenosti s diagnostikou, preventivními opatřeními a řešením problémů spojených s neřízenými protlaky. Bezpečnost a efektivita je pro nás na prvním místě, ať už se jedná o domácnost nebo průmyslový objekt."
          leftAligned={true}
          image={fullBackUpImage}
        />
      </Container>
    </Box>
  );
};
