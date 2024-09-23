import React from "react";
import { Container } from "react-bootstrap";
import { Heading } from "./Heading";
import { Grid, Box } from "@mui/material";
import { ClientCard } from "./Cards/ClientCard";

import menImageFirst from "../../assets/man-1.png";
import menImageSecond from "../../assets/man-2.png";
import womanImage from "../../assets/woman-1.png";

export const References = () => {
  return (
    <Box backgroundColor="var(--color-dark-white)" pb={2}>
      <Container>
        <Heading
          miniTitle="Reference"
          title="Co o nás říkají naši klienti?"
          variant="h4"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-dark-blue)"
        />

        <Grid container pb={6} spacing={4} data-aos="fade-up">
          <Grid item xs={12} md={4}>
            <ClientCard
              image={menImageFirst}
              feedback={
                "Děkuji za rychlou a precizní realizaci výkopových prací. Tým byl velmi profesionální a práci dokončil dříve, než jsem očekával."
              }
              name="Kamil Švec"
              city="Krmelín"
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="50">
            <ClientCard
              image={menImageSecond}
              name="Jiří Palla"
              feedback={
                "Elektroinstalace proběhla naprosto bez problémů. Komunikace byla na vysoké úrovni a všechny mé dotazy byly rychle a jasně zodpovězeny."
              }
              city="Příbor"
              isMiddle={true}
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="150">
            <ClientCard
              image={womanImage}
              name="Petra Brdová"
              city="Šumperk"
              feedback={
                "Oceňuji profesionalitu a odbornost vašeho týmu při řešení neřízených protlaků. Díky vašemu přístupu byl celý projekt bez stresu a komplikací."
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};