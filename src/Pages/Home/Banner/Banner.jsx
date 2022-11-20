import "@fontsource/josefin-sans";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={12} sm={12} lg={6}>
            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
              <h2>Saving Lifes Through</h2>
              <h1>Bloody Bank</h1>
              <p className="mb-xs-5">
                Donate and request blood through our system and save lives. We
                manage the national supply of blood products for all the cities
                in the Canada!
              </p>
              <div className="banner-btn m-sm-auto">
                <Link to="/login">
                  <button className="theme-btn btn-fill">Register Now</button>
                </Link>
                <Link to="/about">
                  <button className="theme-btn bth-blank">Learn More</button>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} lg={6} className="mt-sm-5">
            <div className="hero-slide-right text-center text-lg-start mt-sm-5"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
