// server.js
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const PORT = process.env.PORT || 5000;

app = express();

app.use(serveStatic(__dirname + "/dist"));


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
