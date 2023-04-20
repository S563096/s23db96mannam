var perfume = require('../models/perfume');
// List of all perfume
// List of all perfume
exports.perfume_list = async function(req, res) {
    try{
    theperfume = await perfume.find();
    res.send(theperfume);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
/*exports.perfume_list = function(req, res) {
 res.send('NOT IMPLEMENTED: perfume list');
};*/
// Handle perfume create on POST.
exports.perfume_create_post = async function(req, res) {
    console.log(req.body)
    let document = new perfume();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"perfume_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.fragrance = req.body.fragrance;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific perfume.
/*exports.perfume_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: perfume detail: ' + req.params.id);
};*/
//for a specific perfume.
exports.perfume_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await perfume.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
// Handle perfume create on POST.
/*exports.perfume_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: perfume create POST');
};*/
// Handle perfume delete form on DELETE.
//Handle perfume delete on DELETE.
exports.perfume_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await perfume.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle perfume update form on PUT.
/*exports.perfume_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: perfume update PUT' + req.params.id);
};
*/
// Handle perfume update form on PUT.
exports.perfume_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await perfume.findById( req.params.id)
// Do updates of properties
if(req.body.brand)
toUpdate.brand = req.body.brand;
if(req.body.fragrance) toUpdate.fragrance = req.body.fragrance;
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
// VIEWS
// Handle a show all view
exports.perfume_view_all_Page = async function(req, res) {
    try{
    theperfume = await perfume.find();
    res.render('perfume', { title: 'perfume Search Results', results: theperfume });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };