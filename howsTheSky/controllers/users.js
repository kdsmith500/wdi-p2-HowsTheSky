var User = require('../models/user');

module.exports = {
    index
};

function index(req, res) {
    User.find({}, function(users) {
        res.render('users', {
            users,
            user: req.user,
            name: req.query.name,
            // sortKey
        });
    });
}