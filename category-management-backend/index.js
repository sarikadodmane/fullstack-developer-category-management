const express = require('express');
const pino = require('pino');
const fs = require('fs');
require('dotenv').config();
const logFileStream = fs.createWriteStream('./app.log');

global.logger = pino({},logFileStream);

const app = express();
app.use(express.json());

require('./init')

const PORT = 8080;

const route = require('./src/routes/route')
app.use('/', route);

app.listen(PORT, () => {
    logger.info(`server running on the port ${PORT}`);
});