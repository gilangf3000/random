const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const func = require('./lib/myfunc')

const app = express();
const port = 3000;

app.use(cors())

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

// Api Nyaaa
app.get('/api/email',  async (req, res) => {
  const { email } = await func.getEmail()
  const { password } = await func.getPassword()
  res.json({
    status: 1,
    email: email,
    password: password
  })
});

app.get('/api/nomer',  async (req, res) => {
  const { nomer } = await func.getNumber()
  const { password } = await func.getPassword()
  res.json({
    status: 1,
    nomer: nomer,
    password: password
  })
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
