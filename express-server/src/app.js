// const express = require("express");
import express from "express";
// const express = require("express");
const app = express();
// const mysql = require("mysql");

app.use(express.json());

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'user',
//     password: 'password',
//     database: 'winpeak'
// });

// conn.connect((err) => {
//     if (err) throw err;
//     console.log("Connected to the database");
// })

app.get("/", (req, res) => {
    res.send("Get request returned message!");
});

const addNewDriver = (req, res) => {
    res.status(StatusCode.OK).json("Hi from the driver");
}
// module.exports = app; 



app.listen(3001, () => {
    console.log("Server is running on port 3001 and is updated");
});


export { addNewDriver };
