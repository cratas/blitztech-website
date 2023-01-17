import React from "react";
import { Footer } from "../../UI/Footer";
import PhotovoltaicsHeader from "./PhotovoltaicsHeader";
import Principle from "./Principle";
import Prices from "./Prices";

const Photovoltaics = () => {
  return (
    <>
      <PhotovoltaicsHeader />
      <Principle />
      <Prices />
      <Footer />
    </>
  );
};

export default Photovoltaics;
