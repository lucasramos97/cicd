const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.send({ message: 'Hello Friend!' });
});

module.exports = router;
