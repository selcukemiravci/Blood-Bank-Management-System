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



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});