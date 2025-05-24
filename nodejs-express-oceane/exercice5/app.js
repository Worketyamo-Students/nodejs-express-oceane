const express = require('express');
const bodyParser = require('body-parser'); 
const chalk = require('chalk'); // Adjusted import to CommonJS syntax
const route = require('./routes/taskRoutes.js'); // Adjusted import to CommonJS syntax

const app = express();
app.use(bodyParser.json());
app.use(route);
const port = 7000;

app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server is running on address"  + `http://localhost:` + port);
})

