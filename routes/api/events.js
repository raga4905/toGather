var express = require('express');
var router = express.Router();
var eventsCtrl = require('../../controllers/api/events');

/* GET /api/events */
router.get('/', eventsCtrl.index);
router.get('/:id', eventsCtrl.show);
router.post('/', eventsCtrl.create);
router.delete('/:id', eventsCtrl.delete);
router.put('/:id', eventsCtrl.update);

module.exports = router;