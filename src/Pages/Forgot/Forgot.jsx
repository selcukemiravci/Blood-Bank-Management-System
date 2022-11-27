import { Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { MuiTelInput } from "mui-tel-input";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Routes, Route, useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
const Register = () => {
  const navigate = useNavigate();
  const renewPassword = () => {
    navigate("/popup");
  };
  const [users, setusers] = React.useState({
    patients: true,
    donors: false,
  });
  const { patients, donors } = users;
  const handleFlavorChange = (event) => {
    setusers({ ...users, [event.target.name]: event.target.checked });
  };
  return (
    <Container>
      <Row className="align-items-center">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            minWidth="100vh"
            spacing={4}
          >
            <Container></Container>
            <Typography
              minWidth="100vh"
              sx={{
                fontSize: 40,
                fontWeight: "bold",
                borderColor: "black",
                border: "3px solid",
                color: "black",
                borderRadius: "9px ",
                backgroundColor: "white",
              }}
            >
              Password Access Request Form
            </Typography>
            <Container></Container>
            <TextField
              required
              id="email-address"
              label="Email Address"
              placeholder="Email Address"
            />
            <text>Please enter your email address to access your account.</text>
            <Button
              variant="contained"
              onClick={renewPassword}
              style={{
                minWidth: "300px",
                minHeight: "50px",
                backgroundColor: "black",
                fontSize: 16,
                fontWeight: "bold",
                borderColor: "white",
                border: "3px solid",
                color: "white",
              }}
            >
              Request Password
            </Button>
            <Container></Container>
          </Stack>
        </Box>
        );
      </Row>
    </Container>
  );
};

export default Register;
