var express = require('express');
const perfume_controlers= require('../controllers/perfume');
var router = express.Router();
/* GET perfume */
router.get('/', perfume_controlers.perfume_view_all_Page );
/*GET detail perfume page */
router.get('/detail', perfume_controlers.perfume_view_one_Page);
module.exports = router;
/* GET create perfume page */
router.get('/create', perfume_controlers.perfume_create_Page);
/* GET create update page */
router.get('/update', perfume_controlers.perfume_update_Page); 
/* GET delete perfume page */
router.get('/delete', perfume_controlers.perfume_delete_Page);

