const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Initial Page");
});

app.get("/data", (req, res) => {
  res.json({
    products: ["Product 1", "Product 2", "Product 3"],
  });
});

const port = 8000;
app.listen(port, () => {
  console.log("Site is running on port");
});
