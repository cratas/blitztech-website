import React from "react";
import { Container } from "react-bootstrap";
import { Heading } from "./Heading";
import { Step } from "./Step";
import { Box } from "@mui/system";

export const Workflow = () => {
  return (
    <Container>
      <Box pb={7}>
        <Heading
          miniTitle="Postup"
          title="Jak vypadá práce s námi?"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-dark-blue)"
          variant="h4"
        />

        <Step
          isLeftAligned={false}
          number="01."
          title="Analýza a požadavky"
          text="Zpracujeme kompletní studii co nejvýhodnějšího řešení přímo pro Váš dům s ohledem na Vaše potřeby. Vypracujeme cenovou nabídku a zkontrolujeme technickou připravenost."
        />
        <Step
          isLeftAligned={true}
          number="02."
          title="Administrativa"
          text="Po podpisu objednávky, zařídíme zpracování technického projektu a veškerou nutnou administrativu spojenou  s garancí nejvýhodnější dotace."
        />
        <Step
          isLeftAligned={false}
          number="03."
          title="Instalace"
          text="rovedeme kvalitně instalaci v co nejdřívějším termínu a zajistíme návštěvu revizního technika."
        />
        <Step
          isLeftAligned={true}
          number="04."
          title="Šetříme Vaše finance"
          text="Konečně si můžete začít naplno užívat pocit energetické samostatnosti a šetřit své finance."
        />
      </Box>
    </Container>
  );
};
