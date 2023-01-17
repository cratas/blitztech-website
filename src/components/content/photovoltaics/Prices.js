import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Container } from "react-bootstrap";
import PriceCard from "../../UI/Cards/PriceCard";
import { Heading } from "../../UI/Heading";

const Prices = () => {
  return (
    <Box backgroundColor="var(--color-dark-white)" pb={2}>
      <Container>
        <Heading
          miniTitle="Ceník"
          title="Nabídka fotovoltaické elektrárny"
          variant="h4"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-dark-blue)"
        />

        <Grid container pb={6} spacing={5} data-aos="fade-up">
          <Grid item xs={12} md={4}>
            <PriceCard
              title="Ohřev vody 2,7"
              price="124.000 Kč"
              items={[
                "TCS MAXI 10 kWp",
                "Velikost elektrárny 2,7 kWp",
                "TCS MAXI 10 kWp",
                "Roční výroba 2 500 - 2 800 kWh",
                "Celková cena 175.000 Kč",
                "TCS MAXI 10 kWp",
                "Velikost elektrárny 2,7 kWp",
                "TCS MAXI 10 kWp",
                "Roční výroba 2 500 - 2 800 kWh",
                "Celková cena 175.000 Kč",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="50">
            <PriceCard
              title="TCS MIDI 6 kWp"
              price="290.000 Kč"
              isMiddle={true}
              items={[
                "TCS MAXI 10 kWp",
                "Velikost elektrárny 2,7 kWp",
                "TCS MAXI 10 kWp",
                "Roční výroba 2 500 - 2 800 kWh",
                "Celková cena 175.000 Kč",
                "TCS MAXI 10 kWp",
                "Velikost elektrárny 2,7 kWp",
                "TCS MAXI 10 kWp",
                "Roční výroba 2 500 - 2 800 kWh",
                "Celková cena 175.000 Kč",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="150">
            <PriceCard
              isBestSeller={true}
              title="TCS MAXI 10 kWp"
              price="354.000 Kč"
              items={[
                "TCS MAXI 10 kWp",
                "Velikost elektrárny 2,7 kWp",
                "TCS MAXI 10 kWp",
                "Roční výroba 2 500 - 2 800 kWh",
                "Celková cena 175.000 Kč",
                "TCS MAXI 10 kWp",
                "Velikost elektrárny 2,7 kWp",
                "TCS MAXI 10 kWp",
                "Roční výroba 2 500 - 2 800 kWh",
                "Celková cena 175.000 Kč",
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Prices;
