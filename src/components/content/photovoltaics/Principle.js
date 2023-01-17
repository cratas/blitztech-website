import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Container } from "react-bootstrap";
import { ServiceCard } from "../../UI/Cards/ServiceCard";
import { Heading } from "../../UI/Heading";
import sun from "../../../assets/sun.png";
import clouds from "../../../assets/clouds.png";

const Principle = () => {
  return (
    <Box backgroundColor="var(--color-dark-blue)" textAlign="center">
      <Container>
        <Heading
          miniTitle="Princip"
          title="Jak to vlastně funguje?"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-white)"
          variant="h4"
        />
        <Box px={{ xs: 1, lg: 20 }} data-aos="fade-up">
          <Typography
            variant="p"
            fontWeight="400"
            color="var(--color-light-grey)"
          >
            Fotovoltaická elektrárna vyrábí elektřinu ze slunečního záření.
            Fotovoltaické panely přeměňují sluneční záření, které na ně dopadá,
            na stejnosměrný proud. Ten pak střídač převádí na elektřinu
            střídavou, která napájí běžné spotřebiče, jenž jsou připojené do
            sítě. Pokud se energie vyrobí nadbytek, ukládá se do baterie pro
            pozdější použití.
          </Typography>
        </Box>
        <Box
          display="flex"
          pb={5}
          pt={2}
          px={{ xs: 0, md: 15 }}
          flexDirection={{ xs: "column", md: "row" }}
          data-aos="fade-up"
        >
          <Box width={{ xs: "100%", md: "50%" }}>
            <ServiceCard
              text="Přes den vyrábí fotovoltaická elektrárna více energie, než 
              domácnost spotřebuje. Přebytky jsou ukládány do fyzické, nebo 
              virtuální baterie a do ohřevu vody v bojleru."
              title="Během dne"
              titleColor="var(--color-white)"
              textColor="var(--color-light-grey)"
              customFontWeight="400"
              image={sun}
            />
          </Box>
          <Box width={{ xs: "100%", md: "50%" }}>
            <ServiceCard
              text="Večer a v noci fotovoltaická elektrárna nevyrábí.
               Na provoz domácnosti se automaticky začne používat energie
                uložená v baterii, následně z distribuční sítě a také akumulovaná energie."
              title="Zataženo, v noci"
              titleColor="var(--color-white)"
              textColor="var(--color-light-grey)"
              customFontWeight="400"
              image={clouds}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Principle;
