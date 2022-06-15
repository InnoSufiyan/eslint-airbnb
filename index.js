const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  console.log(req);
});

app.listen(port, () => {
  console.log(`App listening on Port ${port}`);
});
