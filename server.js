// server.js
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app = express();
app.use(cors())

app.use(serveStatic(__dirname + "/dist"));

require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
