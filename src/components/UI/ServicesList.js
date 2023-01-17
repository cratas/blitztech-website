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
          title="Fotovoltaické elektrárny"
          text="Uvažujete o vlastní fotovoltaické elektrárně? Pak jste tu správně. Využijte energii ze slunce, snižte svoje výdaje a jděte s dobou. Naše společnost vám zajistí dodávku solární elektrárny na klíč, dle vašich individuálních potřeb, včetně kompletní administrativy. Výrazné snížení nákladů na elektrickou energii, zodpovědný přístup k životnímu prostředí, částečná energetická soběstačnost a dotace na pořízení. To vše je možné díky fotovoltaické elektrárně."
          leftAligned={true}
          image={photovoltaicService}
        />
        <Service
          title="Nabíjecí stanice"
          text="Eletromobilita představuje nejen současný trend, ale dost možná i budoucnost dopravy. Svědčí o tom rostoucí počty plug-in hybridů i čistě bateriových elektromobilů na našich silnicích i množství vznikajících dobíjecích míst. Dokud se ale auta nabíjí běžnou elektřinou z rozvodné sítě, která se získává především spalováním fosilních paliv, zůstane ekologický přínos elektromobility přinejmenším sporný. Řešení představuje nabíjení elektromobilu z fotovoltaiky"
          leftAligned={false}
          image={powerStation}
        />
        <Service
          title="Full Back up"
          text="Systém Full Back Up slouží jako efektivní řešení při výpadku proudu. Zálohujeme celý dům z baterií vaší fotovoltaické elektrárny, a to bez výrazných zásahů do rozvodů RD. Díky systému Full Back Up si rozsvítíte, i když bude všude kolem tma. Přes den vyrábí fotovoltaická elektrárna více energie, než domácnost spotřebuje. Přebytky jsou ukládány do akumulátoru. Střídač nabíjí a zároveň dodává elektřinu do domu. Při výpadku elektrické energie se okamžitě začne využívat elektrická energie uložená v bateriích FVE."
          leftAligned={true}
          image={fullBackUpImage}
        />
      </Container>
    </Box>
  );
};
