const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(express.json())
app.use(cors())
require('./startup/routes')(app);

exports.app = functions.https.onRequest(app);
