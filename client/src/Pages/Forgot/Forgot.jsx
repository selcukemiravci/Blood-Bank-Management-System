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
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { styled } from "@mui/material/styles";
import Axios from "axios";

const Register = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    forgotApprove();
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const forgotApprove = (e) => {
    Axios.post("http://localhost:3001/forgotP", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data[0].email) {
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);
      } else {
        console.log("Can't find email");
        // handleOpen();

      }
    });
  };

  const navigate = useNavigate();
  const renewPassword = () => {
    navigate("/home");
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
            <input
              required
              id="email-address"
              label="Email Address"
              placeholder="Email Address"
              onBlur={(e) => {
                setEmail(e.target.value);
              }}
            />
            <text>Please enter your email address to access your account.</text>
            <Button
              variant="contained"
              onClick={handleOpen}
              type="button"
              style={{
                minWidth: "300px",
                minHeight: "50px",
                backgroundColor: "black",
                fontSize: 16,
                fontWeight: "bold",
                borderColor: "white",
                color: "white",
              }}
            >
              Request Password
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <h2>
                    <u>Password Access</u>
                  </h2>
                  <p>
                    {" "}
                    For the account with the following email address :{" "}
                    {email}, the assosicated password is :{" "}
                    {password}.
                  </p>
                </Box>
              </Fade>
            </Modal>
            <Button
              variant="contained"
              onClick={renewPassword}
              className="btn btn-outline-danger"
              style={{
                backgroundColor: "black",
                fontSize: 16,
                fontWeight: "bold",
                borderColor: "red",
                color: "white",
              }}
            >
              Go Back
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
