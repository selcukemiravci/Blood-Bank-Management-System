import React from "react";
import Feature from "../../../components/Feature/Feature";
import LatestBlog from "../../../components/LatestBlog/LatestBlog";
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
      <LatestBlog />
      <Promo />
    </>
  );
};

export default Home;
