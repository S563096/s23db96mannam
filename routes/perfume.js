var express = require('express');
const perfume_controlers= require('../controllers/perfume');
var router = express.Router();
/* GET perfume */
router.get('/perfume/:id', perfume_controlers.perfume_view_all_Page );
module.exports = router;