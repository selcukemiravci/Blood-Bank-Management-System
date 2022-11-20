import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutFocus } from "../../FakeData/AboutFocus";

const Service = () => {
  return (
    <section className="service-wrapper">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="section-title text-center">
              <h1>Patient Focused Approach</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
