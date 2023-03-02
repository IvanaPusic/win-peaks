const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(express.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'winpeak'
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database");
})

app.listen(3001, () => {
    console.log("Server is running on port 3001 and is updated");
});

app.get("/", (req, res) => {
    res.send("Get request returned message!");
});

module.exports = app;