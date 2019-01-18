// Dependencies
let connection = require('./connection.js');
const jwt = require('jsonwebtoken');
// const JWTpassword = process.env.JWTpassword;
const JWTpassword = '123';
let token = '';

// Routes
// =============================================================
module.exports = function(app) {
    // Get ALL users
    app.get('/api/all', function(req, res) {
        let dbQuery = 'SELECT * FROM users';

        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    // User Login
    app.post('/api/user', function(req, res) {
        // let dbQuery = `INSERT INTO users (email, password) SELECT * FROM (SELECT '${req.body.email}', '${req.body.password}') AS tmp WHERE NOT EXISTS (SELECT email FROM users WHERE email = '${req.body.email}') LIMIT 1`;
        // connection.query( dbQuery, function(err, result) {
        //     if (err) throw err;
        //     // console.log(`User ${req.body.email} Added!`);
        //     console.log(result);
        //     res.end();
        // });



        let dbQuery = `SELECT * FROM users WHERE email = '${req.body.email}'`;
        // first open transaction
        connection.beginTransaction(function(err) {
            if (err) throw err;
            // check if user exists in db
            connection.query( dbQuery, function(err, result) {
                if (err) {
                    return connection.rollback(function() {
                      throw err;
                    });
                }

                // let passwordProtectedUser = {
                //     id: result.id,
                //     email: result.email,
                // }
                // // create jwt
                // token = jwt.sign({passwordProtectedUser}, JWTpassword);
                // result.dataValues.token = token;
                // res.json(result);
                console.log(result);

                if (result.length > 0) {
                    console.log('User Exists')
                    connection.commit(function(err) {
                        if (err) {
                          return connection.rollback(function() {
                            throw err;
                          });
                        }

                        if(parseInt(req.body.password) === parseInt(result[0].password)) {
                            console.log('password matched')
                            let passwordProtectedUser = {
                                id: result[0].id,
                                email: result[0].email,
                            }
                            // create jwt
                            token = jwt.sign({passwordProtectedUser}, JWTpassword);
                            console.log(token);
                            res.json(token)
                            // return token;

                        } else {
                            console.log('INCORRECT password');
                        }
                        // console.log('success!');
                    });
                    // console.log('82: ' + token);
                    // return token;

                } else {
                    console.log('User does NOT exist')

                    // if user does not already exist, create new user
                    dbQuery = `INSERT INTO users (email, password) VALUES ('${req.body.email}', '${req.body.password}')`;

                    connection.query( dbQuery, function(err, result) {
                        if (err) throw err;
                        console.log(`User ${req.body.email} Added!`);
                        res.end();

                        connection.commit(function(err) {
                            if (err) {
                            return connection.rollback(function() {
                                throw err;
                            });
                            }
                            console.log('success!');
                        });
                    });
                }
                // console.log('106: ' + token);
                // return token;

            })
            // console.log('110: ' + token);
            // return token;

        })
        // console.log('114: ' + token);
        // return token;







        // // if user does not already exist, create new user
        // let dbQuery = `INSERT INTO users (email, password) VALUES ('${req.body.email}', '${req.body.password}')`;

        // connection.query( dbQuery, function(err, result) {
        //     if (err) throw err;
        //     console.log(`User ${req.body.email} Added!`);
        //     res.end();
        // });

        // let dbQuery = `INSERT INTO users (email, password) SELECT * FROM (SELECT '${req.body.email}', '${req.body.password}') AS tmp WHERE NOT EXISTS (SELECT email FROM users WHERE email = '${req.body.email}') LIMIT 1`;
        // connection.query( dbQuery, function(err, result) {
        //     if (err) throw err;
        //     console.log(`User ${req.body.email} Added!`);
        //     res.end();
        // });

        // `INSERT INTO users (email, password)
        // SELECT * FROM (SELECT '${req.body.email}', '${req.body.password}') AS tmp
        // WHERE NOT EXISTS (
        //     SELECT email FROM users WHERE email = '${req.body.email}'
        // ) LIMIT 1;`
    });

    app.get('/api/user/:userId', function(req, res) {
        // verify jwt
        jwt.verify(token, JWTpassword, function(err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                let userId = req.params.userId;

            };
        });
      });

};
