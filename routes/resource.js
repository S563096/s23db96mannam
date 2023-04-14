var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var perfume_controller = require('../controllers/perfume');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// perfume ROUTES ///
// POST request for creating a perfume.
router.post('/perfume', perfume_controller.perfume_create_post);
// DELETE request to delete perfume.
router.delete('/perfume/:id', perfume_controller.perfume_delete);
// PUT request to update perfume.
router.put('/perfume/:id', perfume_controller.perfume_update_put);
// GET request for one perfume.
router.get('/perfume/:id', perfume_controller.perfume_detail);
// GET request for list of all perfume items.
router.get('/perfume', perfume_controller.perfume_list);
module.exports = router;