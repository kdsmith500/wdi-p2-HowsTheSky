var express = require('express');
var router = express.Router();
var skiesApiCtrl = require('../../controllers/api/skies');

router.get('/:id/skies', skiesApiCtrl.index);
router.get('/:id/skies/:id', skiesApiCtrl.show);
router.post('/:id/skies', skiesApiCtrl.create);
router.delete('/:id/skies/:id', skiesApiCtrl.remove);
router.put('/:id/skies/:id', skiesApiCtrl.update);

module.exports = router;
