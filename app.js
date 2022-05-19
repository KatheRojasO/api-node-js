//Server
const express = require ('express');
const app = express();
const port = 3000;

//Database
const connectDB = require('./db/connect');
require('dotenv').config();

//Midleware
app.use(express.json());

//Routes
app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/deviceBrand', require('./routes/deviceBrand'));
app.use('/api/v1/deviceStatus', require('./routes/deviceStatus'));
app.use('/api/v1/deviceType', require('./routes/deviceType'));
app.use('/api/v1/inventory', require('./routes/inventory'));

//Database and server connection
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        });
    } catch (error){
        console.log(error);
    }
}

start();
