var express = require('express');
var router = express.Router();
var eventsCtrl = require('../../controllers/api/events');

/* GET /api/events */
router.get('/', eventsCtrl.index);
router.get('/details/:id', eventsCtrl.show);
router.use(require('../../config/auth'));
router.get('/myevents', eventsCtrl.userIndex)
router.post('/', eventsCtrl.create);
router.delete('/:id', eventsCtrl.delete);
router.put('/:id', eventsCtrl.update);

module.exports = router;