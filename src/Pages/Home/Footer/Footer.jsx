import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <Container>
        <Row className="text-white">
          <Col xs={6} md={3}>
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>About Us</h2>
              </div>
              <div className="widget-content">
                <NavLink className="footer-link">Learn more</NavLink>
                <NavLink className="footer-link">Register</NavLink>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Resources</h2>
              </div>
              <div className="widget-content">
                <NavLink className="footer-link">For Hospitals</NavLink>
                <NavLink className="footer-link">For Patients</NavLink>
                <NavLink className="footer-link">For Donors</NavLink>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Services</h2>
              </div>
              <div className="widget-content">
                <NavLink className="footer-link">Blood Donation</NavLink>
                <NavLink className="footer-link">Blood Request</NavLink>
                <NavLink className="footer-link">
                  Blood Resource for Hospitals
                </NavLink>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Our Address</h2>
              </div>
              <div className="widget-content">
                <NavLink className="footer-link">Calgary, AB, Canada </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copy-right text-center text-white">
        <p className="mb-0">
          &copy; 2022 - <span className="developer">CPSC 471 Group - T07</span>{" "}
          | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
