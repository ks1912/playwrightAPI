// app.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000; // You can use any port you prefer

// Define a route that returns a name
app.get("/api/name", (req, res) => {
  const jsonData = { name: "Kunal Singh", id: "1" }; // Replace this with your desired name or logic to fetch a name
  res.json(jsonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
