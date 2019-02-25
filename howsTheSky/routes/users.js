var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index);
// router.get('/users/:id', usersCtrl.show);
// router.post('/users', usersCtrl.create);
// router.delete('/users/:id', usersCtrl.remove);
// router.put('/users/:id', usersCtrl.update);

module.exports = router;
