const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();

const taskRouter = require('./routes/taskRouter');
const AtvRouter = require('./routes/AtvRouter');

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static(__dirname + '\\public'));
app.use('/api', taskRouter);
app.use('/api', AtvRouter);

module.exports = app;