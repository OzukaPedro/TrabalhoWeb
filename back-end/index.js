require("dotenv").config();
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const User = require("./src/models/userModel");
const hashPassword = require("./src/middlewares/hashPassword");
const {
  generateToken,
  authenticateToken,
} = require("./src/middlewares/authService");
const port = 3000;
const db = require("./src/config/database");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
// app.use(cors());
db.sync();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", hashPassword, async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return res.status(401).send("Invalid email or password");
  }
  const token = generateToken(user.dataValues);
  delete user.dataValues.password;
  res.send({ user, token });
});

app.get("/users", authenticateToken, async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});
app.listen(port, () => {
  console.log(`ta rodando em http://localhost:${port}`);
});
