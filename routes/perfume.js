var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('perfume', { title: 'Search Results perfume' });
});

module.exports = router;