import { Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MuiTelInput } from "mui-tel-input";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Axios from "axios";

const bloodType = [
  {
    value: "A+",
    label: "A+",
  },
  {
    value: "B+",
    label: "B+",
  },
  {
    value: "O+",
    label: "O+",
  },
  {
    value: "AB+",
    label: "AB+",
  },
  {
    value: "A-",
    label: "A-",
  },
  {
    value: "B-",
    label: "B-",
  },
  {
    value: "O-",
    label: "O-",
  },
  {
    value: "AB-",
    label: "AB-",
  },
];
const genders = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];
const Request = () => {
  const [blood, setBlood] = React.useState("");

  const handleeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlood(event.target.value);
  };

  const [gender, setGender] = React.useState("");

  const handleeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const [phone, setPhone] = React.useState("");

  const handleChange = (newValue) => {
    setPhone(newValue);
  };
  const [healthcard, setHealthCard] = React.useState("");

  const [firstname, setFirstName] = React.useState("");

  const [lastname, setLastName] = React.useState("");

  const [age, setAge] = React.useState("");

  const [address, setAddress] = React.useState("");

  const [reason, setReason] = React.useState("");

  const addRequest = () => {
    Axios.post("http://localhost:3001/reqcall", {
      healthcard: healthcard,
      firstname: firstname,
      lastname: lastname,
      age: age,
      address: address,
      bloodtype: blood,
      gender: gender,
      reason: reason,
      phone: phone,
    }).then(() => {
      console.log("Success");
    });
  };

  return (
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
            borderColor: "red",
            border: "3px solid",
            color: "red",
            borderRadius: "9px ",
            backgroundColor: "pink",
          }}
        >
          Blood Request
        </Typography>
        <Container></Container>
        <TextField
          id="healthcard"
          label="Health Card"
          placeholder="Health Card"
          onChange={(e) => {
            setHealthCard(e.target.value);
          }}
        />
        <TextField
          required
          id="firstname"
          label="First Name"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          required
          id="lastname"
          label="Last Name"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          required
          id="age"
          label="Age"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <TextField
          required
          id="address"
          label="Address"
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />

        <Stack direction="row" spacing={2} maxWidth="516px">
          <TextField
            id="bloodtype"
            select
            required
            label="Blood Type"
            value={blood}
            onChange={handleeChange}
          >
            {bloodType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="gender"
            select
            required
            label="Gender"
            value={gender}
            onChange={handleeeChange}
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <TextField
          required
          id="reason"
          label="Reason"
          multiline
          rows={4}
          placeholder="Please describe your reason for blood request"
          onChange={(e) => {
            setReason(e.target.value);
          }}
        />
        <MuiTelInput
          id="phone"
          required
          defaultCountry="CA"
          label="Phone"
          value={phone}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={addRequest}
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
          Request Blood!
        </Button>
        <Container></Container>
      </Stack>
    </Box>
  );
};

export default Request;
