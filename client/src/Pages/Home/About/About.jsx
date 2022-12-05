import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import donto from "../../../Images/blood.png";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="about-wrapper">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="about-left">
              <img src={donto} alt="donto" className="img-fluid donto" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-right mt-5 mt-lg-0">
              <div className="about-content text-start" data-aos="zoom-in">
                <h1>Welcome to Bloody Bank!</h1>
                <p>
                  We are more than just your casual bank. Bloody bank is a
                  charity that helps patients all around Canada to receive their
                  urgent blood treatment needs! We help patients and donors to
                  safely donate and request bloods!
                </p>
                <a href="/about">About Us</a>
              </div>
              <div className="fun-fact-sec" data-aos="fade-right">
                <div className="single-fun">
                  <span>36 000</span>
                  <span>+</span>
                  <p>Patients that need blood </p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-right">
                  <span>13.6 million</span>
                  <span>+</span>
                  <p>Donations per year</p>
                </div>
                <div className="single-fun" data-aos="fade-left">
                  <span>26.8 million</span>
                  <span>+</span>
                  <p>Volunteers</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-left">
                  <span>21 million</span>
                  <span>+</span>
                  <p>Blood component transfused</p>
                </div>
                <span className="line"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
