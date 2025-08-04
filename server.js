const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // or any port you prefer

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "register.html"));
});

app.get("/population", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "population.html"));
});

app.get("/environmental_data", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "environmental-data.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "home.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
