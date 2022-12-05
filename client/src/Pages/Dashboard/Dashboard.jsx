import { Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";



const Dashboard = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={12} lg={12} sm={12} className="text-center mb-5">
          <div className="section-title mt-5"><Typography>Dashboard blood form place holder</Typography></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
