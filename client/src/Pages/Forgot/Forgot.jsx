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
const Register = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <TextField
              required
              id="email-address"
              label="Email Address"
              placeholder="Email Address"
            />
            <text>Please enter your email address to access your account.</text>
            <Button
              variant="contained"
              onClick={handleOpen}
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
                    {" EMAIL ADDRESS "}, the assosicated password is :{" "}
                    {" PASSWORD "}.
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
