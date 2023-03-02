// const express = require("express");
import express from "express";
// const express = require("express");
const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001 and is updated");
});

app.get("/", (req, res) => {
    res.send("Get request returned message!");
});

const addNewDriver = (req, res) => {
    res.status(StatusCode.OK).json("Hi from the driver");
}
// module.exports = app;

export { addNewDriver };
