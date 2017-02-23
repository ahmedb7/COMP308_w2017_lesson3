
let express = require('express');
let app = express();

// assigned a port to a constant
const loaclport = 3000;

/**
 * Get port from environment and store in Express.
 */
let port = process.env.PORT || loaclport;
app.set('port', port);


app.listen(port);
console.log(`Server started at http://loaclhost:${port}`);


// routing
app.use('/hello', (req, res, next) => {
    res.send("Hello World")
});

// main route for the root of my website
app.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome!");
});

module.exports = app;