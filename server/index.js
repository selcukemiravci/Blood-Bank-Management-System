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

<<<<<<< HEAD
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
=======
    db.query(
        "INSERT INTO registration (email, password) VALUES (?,?)", [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Registration values are inserted!");
            }
        }
    );
>>>>>>> testDatabaseRei
});

app.post('/processLogin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM registration WHERE email = ? AND password = ?", [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send("Wrong email or password combination!!")
            }
        }
    );
});

<<<<<<< HEAD
app.post("/doncall", (req, res) => {
  console.log(req.body);
  const healthcard = req.body.healthcard;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const age = req.body.age;
  const address = req.body.address;
  const bloodtype = req.body.bloodtype;
  const gender = req.body.gender;
  const phone = req.body.phone;

  db.query(
    "INSERT INTO donate (healthcard, firstname,lastname,age,address,bloodtype,gender,phone) VALUES (?,?,?,?,?,?,?,?)",
    [healthcard, firstname, lastname, age, address, bloodtype, gender, phone],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Donate values are inserted!");
      }
    }
  );
});

app.get("/dash", (req, res) => {
  db.query("SELECT * FROM request", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/dashdon", (req, res) => {
  db.query("SELECT * FROM donate", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
=======

>>>>>>> testDatabaseRei

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});