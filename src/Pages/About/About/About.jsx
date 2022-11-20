import React from "react";
import AboutService from "../../../components/AboutService/AboutService";
import Content from "../AboutContent/Content";
import Achivement from "../Achivement/Achivement";
import Banner from "../Banner/Banner";

const About = () => {
  return (
    <>
      <Banner />
      <Content />
      <AboutService />
      <Achivement />
    </>
  );
};

export default About;