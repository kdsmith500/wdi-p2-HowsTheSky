var User = require('../models/user');

module.exports = {
    index,
    show
};

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users', {
            users,
            user: req.user,
            name: req.query.name,
            title: 'Users'
        });
    });
}

function show(req, res) {
    User.findById(req.params.id, function(err, user) {
        res.render('users/show', {
            user,
            title: 'User'
        })
    });
}