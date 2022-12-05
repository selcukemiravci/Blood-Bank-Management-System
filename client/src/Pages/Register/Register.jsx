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
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [patientFlag, setPatientFlag] = React.useState(true);
  const [donorFlag, setDonorFlag] = React.useState(true);

  const handleClickPatient = () => {
    setDonorFlag(!donorFlag);
  };
  const handleClickDonor = () => {
    setPatientFlag(!patientFlag);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/approved");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  onBlur={handleEmailChange}
                  type="email"
                  id="mail"
                  className="form-control"
                  placeholder="Email Address"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  id="pass"
                  placeholder="Password"
                  className="form-control"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <FormControl component="fieldset">
                <FormGroup>
                  {patientFlag ? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleClickPatient}
                          name="patients"
                        />
                      }
                      label="Request Blood"
                    />
                  ) : (
                    <FormControlLabel
                      disabled
                      control={
                        <Checkbox
                          onChange={handleClickPatient}
                          name="patients"
                        />
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
                type="submit"
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
            </form>
            <Container></Container>
          </Stack>
        </Box>
        );
      </Row>
    </Container>
  );
};

export default Register;
