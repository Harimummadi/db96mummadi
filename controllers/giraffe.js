var giraffe = require('../models/giraffe');
// List of all giraffes
exports.giraffe_list = function(req, res) {
res.send('NOT IMPLEMENTED: giraffe list');
};
// for a specific giraffe.
exports.giraffe_detail = function(req, res) {
res.send('NOT IMPLEMENTED: giraffe detail: ' + req.params.id);
};
// Handle giraffe create on POST.
exports.giraffe_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: giraffe create POST');
};
// Handle giraffe delete form on DELETE.
exports.giraffe_delete = function(req, res) {
res.send('NOT IMPLEMENTED: giraffe delete DELETE ' + req.params.id);
};
// Handle giraffe update form on PUT.
exports.giraffe_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: giraffe update PUT' + req.params.id);
};