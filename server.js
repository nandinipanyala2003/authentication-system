const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "views", "register.html")
  );
});

app.get("/login", (req, res) => {
  res.sendFile(
    path.join(__dirname, "views", "login.html")
  );
});

app.get("/dashboard", (req, res) => {
  res.sendFile(
    path.join(__dirname, "views", "dashboard.html")
  );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});