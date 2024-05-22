const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const User = require('./src/models/userModel');
const hashPassword = require('./src/middlewares/hashPassword');
const { generateToken, authenticateToken } = require('./src/middlewares/authService');
const port = 3000;
const db = require('./src/config/database');
var cors = require('cors')

app.use(express.json());
app.use(cors())
db.sync();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  app.post('/register', hashPassword, async (req, res) => {
    const user = await User.create({ ...req.body });
    res.send(user);
  });
app.listen(port, () => {
    console.log(`ta rodando em http://localhost:${port}`);
  });

