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
          title="Co o nás říkají naši zákazníci?"
          variant="h4"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-dark-blue)"
        />

        <Grid container pb={6} spacing={4} data-aos="fade-up">
          <Grid item xs={12} md={4}>
            <ClientCard
              image={menImageFirst}
              feedback={
                "Chci poděkovat za příjemnou komunikaci a skvěle odvedenou práci. Střechaři i elektrikáři odvedli špičkovou práci. Byli milí, ochotní a vstřícní."
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
                "Perfektní spolupráce. Moc děkuji celému týmu. Do budoucna budu uvažovat i o rozšíření, případně pořízení autonabíječky."
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
                "Děkujeme za instalaci fotovoltaiky na náš rodinný dům. Musím říci, že jsem příjemně překvapen, jak celý proces proběhl (i v dnešní složité době) plynule a hladce."
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
