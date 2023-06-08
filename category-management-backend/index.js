const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(express.json());

require('./init')

const PORT = 8080;

const route = require('./src/routes/route')
app.use('/', route);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`server running on the port ${PORT}`);
});