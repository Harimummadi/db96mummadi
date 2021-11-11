var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var giraffe_controller = require('../controllers/giraffe');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// giraffe ROUTES ///
// POST request for creating a giraffe.
router.post('/giraffes', giraffe_controller.giraffe_create_post);
// DELETE request to delete giraffe.
router.delete('/giraffes/:id', giraffe_controller.giraffe_delete);
// PUT request to update giraffe.
router.put('/giraffes/:id', giraffe_controller.giraffe_update_put);
// GET request for one giraffe.
router.get('/giraffes/:id', giraffe_controller.giraffe_detail);
// GET request for list of all giraffe items.
router.get('/giraffes', giraffe_controller.giraffe_list);
module.exports = router;