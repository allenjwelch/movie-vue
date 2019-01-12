// Dependencies
let connection = require('./connection.js');

// Routes
// =============================================================
module.exports = function(app) {
    // Get all chirps
    app.get('/api/all', function(req, res) {
        let dbQuery = 'SELECT * FROM users';

        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
            // console.log('query successful');
            // console.log(result);
        });
    });

    app.post('/api/user/new', function(req, res) {
        console.log(req.body);

        let dbQuery = 'INSERT INTO users (email, password) VALUES (?,?)';
        let post = {email: req.body.email, password: req.body.password};

        connection.query( dbQuery, post, function(err, result) {
            if (err) throw err;
            console.log('User Added!');
            res.end();
        });
    });
};
