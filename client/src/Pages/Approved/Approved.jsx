import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate } from "react-router-dom";

const Approved = () => {
  const navigate = useNavigate();
  const donate = () => {
    navigate("/donate");
  };
  const request = () => {
    navigate("/request");
  };
  const dashboard = () => {
    navigate("/dashboard");
  };
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={12} lg={12} sm={12} className="text-center mb-5">
          <div className="section-title mt-5"></div>
        </Col>
        <Col md={12} lg={12} sm={12}>
          <Box sx={{ width: "100%" }}>
            <Stack
              alignItems="center"
              justifyContent="center"
              minWidth="100vh"
              spacing={9}
            >
              <Button
                variant="contained"
                onClick={donate}
                style={{
                  minWidth: "300px",
                  minHeight: "50px",
                  backgroundColor: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  borderColor: "red",
                  border: "3px solid",
                  color: "red",
                }}
              >
                Donate Blood
              </Button>
              <Button
                variant="contained"
                onClick={request}
                style={{
                  minWidth: "300px",
                  minHeight: "50px",
                  backgroundColor: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  borderColor: "red",
                  border: "3px solid",
                  color: "red",
                }}
              >
                Request Blood
              </Button>
              <Button
                variant="contained"
                onClick={dashboard}
                style={{
                  minWidth: "300px",
                  minHeight: "50px",
                  backgroundColor: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  borderColor: "red",
                  border: "3px solid",
                  color: "red",
                }}
              >
                Dashboard
              </Button>
            </Stack>
          </Box>
        </Col>
        <Col md={12} lg={12} sm={12} className="text-center mb-5">
          <div className="section-title mt-5"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Approved;
