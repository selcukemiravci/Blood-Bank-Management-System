import { Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MuiTelInput } from "mui-tel-input";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

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
  const [blood, setBlood] = React.useState("");

  const handleeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlood(event.target.value);
  };

  const [gender, setGender] = React.useState("");

  const handleeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const [value, setValue] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [firstname, setFirstName] = React.useState("");

  const [lastname, setLastName] = React.useState("");

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
              .slice(0, 10);
          }}
          min={0}
          id="healthcard"
          label="Health Card"
          placeholder="Health Card"
        />
        <TextField
          required
          type="text"
          inputProps={{ maxLength: 10 }}
          id="firstname"
          label="First Name"
          placeholder="First Name"
          value={firstname} onChange={onInputChangeFirstName}
        />
        <TextField
          required
          inputProps={{ maxLength: 10 }}
          id="lastname"
          label="Last Name"
          placeholder="Last Name"
          value={lastname} onChange={onInputChangeLastName}
        />
        <TextField
          required
          type="number"
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 16);
          }}
          min={0}
          id="age"
          label="Age"
          placeholder="Age"
        />
        <TextField
          required
          inputProps={{ maxLength: 20 }}
          id="address"
          label="Address"
          placeholder="Address"
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
          value={value}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={() => {}}
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
        <Container></Container>
      </Stack>
    </Box>
  );
};

export default Donate;
