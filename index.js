const express = require('express');
const app = express();
const cors = require('cors');

const { connection } = require('./config/db');
const { UserRouter } = require('./Routes/User.routes');

app.use(express.json());
app.use(cors());
app.use('/user', UserRouter);



app.listen(8080, async () => {
    try {
        await connection;
        console.log({ "message": "Connected to Bug-Tracker DataBase" });
    } catch (error) {
        console.log(error);
        console.log({ "message": "Failed In Connecting To Bug-Tracker DataBase" });
    };
});