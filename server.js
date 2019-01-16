// server.js
const express = require('express');
// const path = require('path');
const serveStatic = require('serve-static');
const cors = require('cors');
const bodyParser = require('body-parser');
const OktaJwtVerifier = require('@okta/jwt-verifier')

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: '0oaizv8hncdFtMdOz0h7',
  issuer: 'https://dev-885898.oktapreview.com/oauth2/default'
})

const PORT = process.env.PORT || 5000;

app = express();
app.use(cors())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(serveStatic(__dirname + "/dist"));

app.use((req, res, next) => {
    // require every request to have an authorization header
    if (!req.headers.authorization) {
      return next(new Error('Authorization header is required'))
    }
    let parts = req.headers.authorization.trim().split(' ')
    let accessToken = parts.pop()
    oktaJwtVerifier.verifyAccessToken(accessToken)
      .then(jwt => {
        req.user = {
          uid: jwt.claims.uid,
          email: jwt.claims.sub
        };
        console.log(req.user);
        next()
      })
      .catch(next) // jwt did not verify!
})

require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
