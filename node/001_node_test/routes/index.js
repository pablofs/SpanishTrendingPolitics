var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

///////////////////////////////////////////////////////////////////////////////
// PFS: New development
/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});

router.get('/documentlist', function(req, res) {
    res.render('documentlist')
});

router.get('/concept-map', function(req, res) {
    res.render('concept-map')
});

router.get('/concept-map2', function(req, res) {
    res.render('concept-map2')
});

router.get('/radar', function(req, res) {
    res.render('radar')
});


///////////////////////////////////////////////////////////////////////////////

module.exports = router;
