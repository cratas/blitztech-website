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
          title="První konzultace a analýza"
          text="Provedeme detailní průzkum místa a analyzujeme vaše specifické požadavky, ať už jde o výkopové práce, elektroinstalaci nebo neřízené protlaky."
        />
        <Step
          isLeftAligned={true}
          number="02."
          title="Plánování a administrativa"
          text="Sestavíme technický plán a časový harmonogram prací. Postaráme se také o veškerou potřebnou administrativu a povolení."
        />
        <Step
          isLeftAligned={false}
          number="03."
          title="Provedení prací"
          text="Naše týmy zahájí práce podle plánu. Věnujeme maximální pozornost kvalitě, efektivitě a bezpečnosti."
        />
        <Step
          isLeftAligned={true}
          number="04."
          title="Kontrola a dokončení"
          text="Po dokončení prací provedeme revizi a kontrolu kvality. Ujistíme se, že vše bylo provedeno podle vašich představ a očekávání."
        />
      </Box>
    </Container>
  );
};