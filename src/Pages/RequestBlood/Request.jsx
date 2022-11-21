import { Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";



const Request = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={12} lg={12} sm={12} className="text-center mb-5">
          <div className="section-title mt-5"><Typography>Request blood form place holder</Typography></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Request;
