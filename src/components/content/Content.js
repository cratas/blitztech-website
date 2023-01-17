import { React } from "react";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import { Routes, Route } from "react-router-dom";
import Services from "./services/Services";
import Photovoltaics from "./photovoltaics/Photovoltaics";

const Content = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/photovoltaics" element={<Photovoltaics />} />
    </Routes>
  );
};

export default Content;
