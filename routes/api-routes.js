// Dependencies
let connection = require('./connection.js');
const jwt = require('jsonwebtoken');
const JWTpassword = '123' || process.env.JWT;
let token = '';

// Routes
// =============================================================
module.exports = function(app) {
    // GET ALL users
    app.get('/api/all', function(req, res) {
        let dbQuery = 'SELECT * FROM users';

        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    // GET User Login
    app.get('/api/user', function(req, res) {
        let loginFail = false;
        let dbQuery = `SELECT * FROM users WHERE email = '${req.query.email}'`;
        // first open transaction
        connection.beginTransaction(function(err) {
            if (err) throw err;
            // check if user exists in db
            connection.query( dbQuery, function(err, result) {
                if (err) {
                    console.log(err);
                    return connection.rollback(function() {
                      throw err;
                    });
                }

                if(req.query.password === result[0].password) {
                    console.log('password matched')
                    let passwordProtectedUser = {
                        id: result[0].id,
                        email: result[0].email,
                    }
                    // create jwt
                    token = jwt.sign({passwordProtectedUser}, JWTpassword);
                    console.log(token);
                    console.log(passwordProtectedUser);
                    res.json(token)
                } else {
                    console.log('INCORRECT password');
                    loginFail = true;
                    res.json(loginFail);
                    res.end();
                    return;
                }
            })
        })

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

    // POST new user
    app.post('/api/user/new', function(req, res) {
        let registerFail = false;
        let dbQuery = `SELECT * FROM users WHERE email = '${req.body.email}'`;
        // first open transaction
        connection.beginTransaction(function(err) {
            if (err) throw err;
            // check if user exists in db
            connection.query( dbQuery, function(err, result) {
                if (err) {
                    console.log(err);
                    return connection.rollback(function() {
                      throw err;
                    });
                }

                // console.log(result);
                if (result.length > 0) {
                    console.log('User Exists')
                    connection.commit(function(err) {
                        if (err) {
                          return connection.rollback(function() {
                            throw err;
                          });
                        }
                    });
                    registerFail = true;
                    res.json(registerFail)
                    res.end();
                    return;
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
                                console.log(err);
                                return connection.rollback(function() {
                                    throw err;
                                });
                            }
                            console.log('success!');
                        });
                    });
                }
            })
        })
    });

    // GET user watchlist
    app.get('/api/watchlist/', function(req, res) {
        // verify jwt
        let token = req.header('authorization')
        // console.log(token);
        jwt.verify(token, JWTpassword, function(err, data) {
            if (err) {
                res.sendStatus(403);
                console.log('ERROR: ' + err)
            } else {
                console.log('JWT Accepted')
                // console.log(data.passwordProtectedUser)
                let uid = data.passwordProtectedUser.id;

                let dbQuery = `SELECT * FROM watchlists WHERE uid = '${uid}'`;
                connection.query(dbQuery, function(err, result) {
                    if (err) throw err;
                    res.json(result);
                    // console.log(result);
                });
            };
        });
    });

    // POST show to watchlist
    app.post('/api/watchlist/post', function(req, res) {
        let token = req.header('authorization');
        let uid;
        let title = req.body.title;
        let title_id = req.body.title_id;
        let inWatchlist;

        jwt.verify(token, JWTpassword, function(err, data) {
            if (err) {
                res.sendStatus(403);
                console.log('ERROR: ' + err)
            } else {
                console.log('JWT Accepted')
                console.log(data)
                uid = data.passwordProtectedUser.id;

                let dbQuery = `SELECT * FROM watchlists WHERE title_id = '${title_id}' AND uid = ${uid}`;
                // first open transaction
                connection.beginTransaction(function(err) {
                    if (err) throw err;
                    // check if title exists in db for this user
                    connection.query( dbQuery, function(err, result) {
                        if (err) {
                            return connection.rollback(function() {
                              throw err;
                            });
                        }
                        // console.log(result);
                        if (result.length > 0) {
                            console.log('Title exists in user watchlist')
                            inWatchlist = true;
                            connection.commit(function(err) {
                                if (err) {
                                  return connection.rollback(function() {
                                    throw err;
                                  });
                                }
                            });
                            res.json(inWatchlist);
                        } else {
                            console.log('Title does NOT exist in user watchlist')
                            inWatchlist = false;

                            // if user does not already exist, create new user
                            dbQuery = `INSERT INTO watchlists (uid, title, title_id) VALUES ('${uid}', '${title}', '${title_id}')`;

                            connection.query( dbQuery, function(err, result) {
                                if (err) throw err;
                                console.log(`Title ${title} Added!`);

                                connection.commit(function(err) {
                                    if (err) {
                                    return connection.rollback(function() {
                                        throw err;
                                    });
                                    }
                                    console.log('success!');
                                });
                                res.json(inWatchlist);
                                res.end();
                            });
                        }
                    })
                })
            };
        });


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

    // DELETE show from watchlist
    app.delete('/api/watchlist/delete', function(req, res) {
        let token = req.header('authorization');
        let uid;
        let title_id = req.body.title_id;

        jwt.verify(token, JWTpassword, function(err, data) {
            if (err) {
                res.sendStatus(403);
                console.log('ERROR: ' + err)
            } else {
                console.log('JWT Accepted')
                console.log(data)
                uid = data.passwordProtectedUser.id;

                dbQuery = `DELETE FROM watchlists WHERE uid = ${uid} AND title_id = ${title_id}`;

                connection.query( dbQuery, function(err, result) {
                    if (err) throw err;
                    console.log(`Title id ${title_id} deleted!`);
                    res.end();
                });
            }
        })
    });
};
