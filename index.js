const express = require("express");
const axios = require("axios");
const mysql = require("mysql2");
const app = express();

const port = 5000;

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "storeDB", // The database name
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

app.post("/generate-report", async (req, res) => {
  try {
    const apiUrl =
      "https://raw.githubusercontent.com/Bit-Code-Technologies/mockapi/main/purchase.json";
    const { data } = await axios.get(apiUrl);

    console.log("Fetched data:", data);
    // insert users

    // console.log("Fetched users:", data?.users);
    const users = new Map();
    const products = new Set();
    const purchases = [];

    data.forEach((record) => {
      const { order_no, name, user_phone } = record;
      console.log("Fetched users also:", order_no, name, user_phone);
      if (!users.has(record.order_no)) {
        users.set(record.order_no, {
          id: record.order_no,
          name: record.name,
          email: record.user_phone, // You might want to adjust this
        });
      }
      console.log("Fetched users:", users);
    });

    res.send("Data fetched and stored successfully!");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Failed to fetch data.");
  }
});
// Generate Report
app.get("/report", (req, res) => {
  const query = `
      SELECT Products.name AS productName, Users.name AS customerName, 
             PurchaseHistory.quantity, Products.price, PurchaseHistory.total
      FROM PurchaseHistory
      JOIN Users ON PurchaseHistory.userId = Users.id
      JOIN Products ON PurchaseHistory.productId = Products.id
      ORDER BY PurchaseHistory.total DESC;
    `;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
app.get("/", (req, res) => {
  res.send("This is the Reporting store !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
