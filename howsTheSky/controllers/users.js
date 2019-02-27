var User = require('../models/user');
var Thread = require('../models/thread');

module.exports = {
    index,
    show
};

function index(req, res) {
    User.find({}, function(err, users) {
        // console.log(users);
        res.render('users', {
            users,
            user: req.user,
            name: req.query.name,
            title: 'Users'
        });
    });
}

function show(req, res) {
    User.findById(req.params.id).populate('threads').exec(function(err, user) {
        Thread.find({user: user._id}, function(err, threads) {
            console.log(user, "TTTTTTT", threads);
            res.render('users/show', {
                user,
                threads,
                title: 'User'
            })
        });
    });
}