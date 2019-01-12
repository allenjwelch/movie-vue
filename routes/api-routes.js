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
        let dbQuery = `INSERT INTO users (email, password) VALUES ('${req.body.email}', '${req.body.password}')`;

        connection.query( dbQuery, function(err, result) {
            if (err) throw err;
            console.log(`User ${req.body.email} Added!`);
            res.end();
        });
    });
};
