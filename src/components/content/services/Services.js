import React, { memo } from "react";
import { ServicesIntroHeader } from "../../UI/ServicesIntroHeader";
import { ServicesList } from "../../UI/ServicesList";
import { Footer } from "../../UI/Footer";
import { Questions } from "./Questions";

const Services = () => {
  return (
    <>
      <ServicesIntroHeader />

      <ServicesList />

      <Questions />

      <Footer />
    </>
  );
};

export default memo(Services);
