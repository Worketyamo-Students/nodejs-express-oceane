import express from 'express';
import bodyParser from 'body-parser';  
import chalk from 'chalk';
import dotenv from 'dotenv/config';
import route from './routes/taskRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use(route);
const port = 7000;

app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server is running on address"  + chalk.green `http://localhost:` + port);
})

