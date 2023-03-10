const express = require('express');
const app = express();
const cors = require('cors');

const { connection } = require('./config/db');
const { UserRouter } = require('./Routes/User.routes');
const { BugsRouter } = require('./Routes/Bugs.routes')
const { Authenticate } = require("./Middlewares/Authenticate")

app.use(express.json());
app.use(cors());
app.use('/user', UserRouter);

app.use(Authenticate);
app.use('/bugs', BugsRouter);

app.listen(8080, async () => {
    try {
        await connection;
        console.log({ "message": "Connected to Bug-Tracker DataBase" });
    } catch (error) {
        console.log(error);
        console.log({ "message": "Failed In Connecting To Bug-Tracker DataBase" });
    };
});