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
// for a specific perfume.
exports.perfume_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: perfume detail: ' + req.params.id);
};
// Handle perfume create on POST.
exports.perfume_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: perfume create POST');
};
// Handle perfume delete form on DELETE.
exports.perfume_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: perfume delete DELETE ' + req.params.id);
};
// Handle perfume update form on PUT.
exports.perfume_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: perfume update PUT' + req.params.id);
};