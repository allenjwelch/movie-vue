// Dependencies
let connection = require('./connection.js');

// Routes
// =============================================================
module.exports = function(app) {
    app.get('/api/all', function(req, res) {
        let dbQuery = 'SELECT * FROM users';

        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    app.post('/api/user/new', function(req, res) {
        let dbQuery = `INSERT INTO users (email, password) SELECT * FROM (SELECT '${req.body.email}', '${req.body.password}') AS tmp WHERE NOT EXISTS (SELECT email FROM users WHERE email = '${req.body.email}') LIMIT 1`;
        connection.query( dbQuery, function(err, result) {
            if (err) throw err;
            // console.log(`User ${req.body.email} Added!`);
            console.log(result);
            res.end();
        });



        // let dbQuery = `SELECT * FROM users WHERE NOT EXISTS (SELECT * FROM users WHERE email = '${req.body.email}')`;

        // // first open transaction
        // connection.beginTransaction(function(err) {
        //     if (err) throw err;
        //     // check if user exists in db
        //     connection.query( dbQuery, function(err, result) {
        //         if (err) {
        //             return connection.rollback(function() {
        //               throw err;
        //             });
        //         }
        //         res.json(result);
        //         console.log(result);

        //         // if user does not already exist, create new user
        //         dbQuery = `INSERT INTO users (email, password) VALUES ('${req.body.email}', '${req.body.password}')`;

        //         connection.query( dbQuery, function(err, result) {
        //             if (err) throw err;
        //             console.log(`User ${req.body.email} Added!`);
        //             res.end();

        //             connection.commit(function(err) {
        //                 if (err) {
        //                   return connection.rollback(function() {
        //                     throw err;
        //                   });
        //                 }
        //                 console.log('success!');
        //             });
        //         });
        //     })
        // })







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


};
