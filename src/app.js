const express = require('express');

const app = express();
const messagesRoute = require('./routes/Messages');

app.use(express.json());
app.use('/messages', messagesRoute);

module.exports = app;
