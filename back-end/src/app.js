const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();

const taskRouter = require('./routes/taskRouter');
const AtvRouter = require('./routes/AtvRouter');
const moedaRouter = require('./routes/moedaRouter');
const lojaRouter = require("./routes/lojaRouter")

app.set('port', process.env.PORT || 3006);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static(__dirname + '\\public'));
app.use('/api', taskRouter);
app.use('/api', AtvRouter);
app.use('/api', moedaRouter);
app.use("/api", lojaRouter);

module.exports = app;

