import { React, useRef, memo } from "react";
import { IntroHeader } from "../../UI/IntroHeader";
import { Stats } from "../../UI/Stats";
import { Services } from "../../UI/Services";
import { ContactHoneyPot } from "../../UI/ContactHoneyPot";
import { References } from "../../UI/References";
import { Workflow } from "../../UI/Workflow";
import { Footer } from "../../UI/Footer";
import { IntroImage } from "../../UI/IntroImage";

const Home = () => {
  const scrollingRef = useRef(null);

  return (
    <>
      <IntroHeader scrollingRef={scrollingRef} />

      <IntroImage />

      <Stats />

      <Services scrollingRef={scrollingRef} />

      <ContactHoneyPot />

      <Workflow />

      <References />

      <Footer />
    </>
  );
};

export default memo(Home);
