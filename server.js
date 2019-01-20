// server.js
const express = require('express');
const serveStatic = require('serve-static');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app = express();
app.use(cors())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(serveStatic(__dirname + "/dist"));

require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
