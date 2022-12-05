import { Typography } from "@mui/material";
import React from "react";
import { Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Axios from "axios";

const Register = () => {
  const [patientFlag, setPatientFlag] = React.useState(true);
  const [donorFlag, setDonorFlag] = React.useState(true);

  const handleClickPatient = () => {
    setDonorFlag(!donorFlag);
  };
  const handleClickDonor = () => {
    setPatientFlag(!patientFlag);
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const addRegistration = () => {
    Axios.post("http://localhost:3001/create", {
      email: email,
      password: password,
    }).then(() => {
      console.log("Success");
    });
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              required
              id="password"
              label="Password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
              onClick={addRegistration}
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
