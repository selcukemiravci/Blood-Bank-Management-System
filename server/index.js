const express = require("express"); // Import express
const mysql = require("mysql");
const cors = require("cors");
const app = express(); // Create express app

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Password",
  database: "bloodybank",
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  const healthcard = req.body.healthcard;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const age = req.body.age;
  const address = req.body.address;
  const bloodtype = req.body.bloodtype;
  const gender = req.body.gender;
  const reason = req.body.reason;
  const phone = req.body.phone;

  db.query(
    "INSERT INTO registration (email, password) VALUES (?,?)",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Registration values are inserted!");
      }
    }
  );
});

app.post("/reqcall", (req, res) => {
  console.log(req.body);
  const healthcard = req.body.healthcard;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const age = req.body.age;
  const address = req.body.address;
  const bloodtype = req.body.bloodtype;
  const gender = req.body.gender;
  const reason = req.body.reason;
  const phone = req.body.phone;

  db.query(
    "INSERT INTO request (healthcard, firstname,lastname,age,address,bloodtype,gender,reason,phone) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      healthcard,
      firstname,
      lastname,
      age,
      address,
      bloodtype,
      gender,
      reason,
      phone,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Request values are inserted!");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
