import express from 'express';
import bodyParser from 'body-parser';  
import chalk from 'chalk';
import dotenv from 'dotenv/config';
import router from './routes/bookRoutes.js';
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(router)
app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server is running on address"  + chalk.green `http://localhost:` + port);
})

