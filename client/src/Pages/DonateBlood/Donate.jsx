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
import { useNavigate } from "react-router-dom";

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
const isLetters = (str) => /^[A-Za-z]*$/.test(str);
const Donate = () => {
  const navigate = useNavigate();

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

  const addDonation = () => {
    Axios.post("http://localhost:3001/doncall", {
      healthcard: healthcard,
      firstname: firstname,
      lastname: lastname,
      age: age,
      address: address,
      bloodtype: blood,
      gender: gender,
      phone: phone,
    }).then(() => {
      console.log("Success");
    });
  };

  const onInputChangeFirstName = (e) => {
    const { value } = e.target;
    if (isLetters(value)) {
      setFirstName(value);
    }
  };

  const onInputChangeLastName = (e) => {
    const { value } = e.target;
    if (isLetters(value)) {
      setLastName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
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
          Blood Donation
        </Typography>
        <Container></Container>
        <TextField
          type="number"
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 9);
          }}
          min={0}
          id="healthcard"
          label="Health Card"
          placeholder="Health Card"
          onChange={(e) => {
            setHealthCard(e.target.value);
          }}
        />
        <TextField
          required
          type="text"
          inputProps={{ maxLength: 10 }}
          id="firstname"
          label="First Name"
          placeholder="First Name"
          value={firstname}
          onChange={onInputChangeFirstName}
        />
        <TextField
          required
          inputProps={{ maxLength: 10 }}
          id="lastname"
          label="Last Name"
          placeholder="Last Name"
          value={lastname}
          onChange={onInputChangeLastName}
        />
        <TextField
          required
          type="number"
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 3);
          }}
          min={0}
          id="age"
          label="Age"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <TextField
          required
          inputProps={{ maxLength: 35 }}
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
            placeholder="Please select your bloodtype"
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

        <MuiTelInput
          id="phone"
          required
          inputProps={{ maxLength: 15 }}
          defaultCountry="CA"
          label="Phone"
          value={phone}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={addDonation}
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
          Donate Blood!
        </Button>

        <Button
          onClick={handleSubmit}
          style={{
            minWidth: "150",
            minHeight: "50px",
            backgroundColor: "white",
            fontSize: 16,
            fontWeight: "bold",
            borderColor: "orange",
            border: "3px solid",
            color: "orange",
          }}
        >
          Go Back
        </Button>
        <Container></Container>
      </Stack>
    </Box>
  );
};

export default Donate;
