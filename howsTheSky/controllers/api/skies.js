var Sky = require('../../models/sky');

module.exports = {
    index,
    show,
    create,
    remove,
    update
};

function index(req, res) {
    Sky.find({}).then(function(skies) {
        res.status(200).json(skies);
    });
}

function show(req, res) {
    Sky.findById(req.params.id).then(function(sky) {
        res.status(200).json(sky);
    });
}

function create(req, res) {
    Sky.create(req.body).then(function(sky) {
        res.status(201).json(sky);
    });
}

function remove(req, res) {
    Sky.findByIdAndRemove(req.params.id).then(function(sky) {
        res.status(200).json(sky);
    });
}

function update(req, res) {
    Sky.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(sky) {
        res.status(200).json(sky);
    });
}