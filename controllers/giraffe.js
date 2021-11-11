var giraffe = require('../models/giraffe');

/// List of all giraffe 
exports.giraffe_list = async function (req, res) {
    try {
        thegiraffe = await giraffe.find();
        res.send(thegiraffe);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.giraffe_view_all_Page = async function (req, res) {
    try {
        thegiraffe = await giraffe.find();
        res.render('giraffe', { title: 'giraffe Search Results', results: thegiraffe });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`)
        
    }
};

// for a specific giraffe.
exports.giraffe_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: giraffe detail: ' + req.params.id);
};

// Handle giraffe create on POST. 
exports.giraffe_create_post = async function (req, res) {
    console.log(req.body)
    let document = new giraffe();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand; 
    document.flavour = req.body.flavour; 
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle giraffe delete form on DELETE.
exports.giraffe_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: giraffe delete DELETE ' + req.params.id);
};
// Handle giraffe update form on PUT.
exports.giraffe_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: giraffe update PUT' + req.params.id);
};