const express = require("express");
const axios = require("axios");
const mysql = require("mysql2");
const app = express();

const port = 5000;

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "storeDB", // The database name
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

app.get("/", (req, res) => {
  res.send("This is the Reporting store !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
