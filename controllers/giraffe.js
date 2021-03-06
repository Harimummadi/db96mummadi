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
    // {"giraffe_type":"goat", "cost":12, "size":"large"}
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
exports.giraffe_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await giraffe.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.giraffe_type)  
               toUpdate.brand = req.body.brand; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// for a specific giraffe. 
exports.giraffe_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await giraffe.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};

// Handle giraffe delete on DELETE. 
exports.giraffe_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await giraffe.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

 // Handle a show one view with id specified by query 
 exports.giraffe_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await giraffe.findById( req.query.id) 
        res.render('giraffedetail',  
{ title: 'giraffe Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a giraffe. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.giraffe_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('giraffecreate', { title: 'giraffe Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a giraffe. 
// query provides the id 
exports.giraffe_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await giraffe.findById(req.query.id) 
        res.render('giraffeupdate', { title: 'giraffe Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.giraffe_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await giraffe.findById(req.query.id) 
        res.render('giraffedelete', { title: 'giraffe Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 