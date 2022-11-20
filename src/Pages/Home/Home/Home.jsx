import React from "react";
import Feature from "../../../components/Feature/Feature";
import Service from "../../../components/Service/Service";
import About from "../About/About";
import Promo from "../Appoinment-promo/Promo";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Service />
      <Promo />
    </>
  );
};

export default Home;
