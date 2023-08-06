const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send({ message: 'Hello Friend!' });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      `Server is Successfully Running, and App is listening on port ${PORT}`
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});