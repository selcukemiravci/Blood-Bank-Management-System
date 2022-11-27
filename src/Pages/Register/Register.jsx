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
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
const Register = () => {
  const [patientFlag, setPatientFlag] = React.useState(true);
  const [donorFlag, setDonorFlag] = React.useState(true);

  const handleClickPatient = () => {
    setDonorFlag(!donorFlag);
  };
  const handleClickDonor = () => {
    setPatientFlag(!patientFlag);
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
              Registration Form
            </Typography>
            <Container></Container>
            <TextField
              required
              id="email-address"
              label="Email Address"
              placeholder="Email Address"
            />
            <TextField
              required
              id="password"
              label="Password"
              placeholder="Password"
            />
            <FormControl component="fieldset">
              <FormGroup>
                {patientFlag ? (
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleClickPatient} name="patients" />
                    }
                    label="Request Blood"
                  />
                ) : (
                  <FormControlLabel
                    disabled
                    control={
                      <Checkbox onChange={handleClickPatient} name="patients" />
                    }
                    label="Request Blood"
                  />
                )}
                {donorFlag ? (
                  <FormControlLabel
                    control={
                      <Checkbox onChange={handleClickDonor} name="donors" />
                    }
                    label="Donate Blood"
                  />
                ) : (
                  <FormControlLabel
                    disabled
                    control={
                      <Checkbox onChange={handleClickDonor} name="donors" />
                    }
                    label="Donate Blood"
                  />
                )}
              </FormGroup>
              <FormHelperText>
                Please choose the most appropiate options above for your
                registration.
              </FormHelperText>
            </FormControl>
            <Button
              variant="contained"
              onClick={() => {}}
              style={{
                minWidth: "300px",
                minHeight: "50px",
                backgroundColor: "white",
                fontSize: 16,
                fontWeight: "bold",
                borderColor: "black",
                border: "3px solid",
                color: "black",
              }}
            >
              Submit Registeration
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
