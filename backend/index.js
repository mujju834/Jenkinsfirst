const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Login failed' });
  }
});
app.get('/', (req, res) => {
      res.status(200).send({ message: 'Login successful' });
   
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
