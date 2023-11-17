const express = require('express');
const app = express();
require('dotenv').config();
const webRouter = require('./route/web');
const configViewEngine = require('./config/ViewEngine');


configViewEngine(app);

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;


app.use('/', webRouter)

app.listen(port, hostname, () => {
    console.log(`This Server running in Port : ${port}`)
})
