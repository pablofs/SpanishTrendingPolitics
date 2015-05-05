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

router.get('/document_visualizer', function(req, res) {
    res.render('document_visualizer')
});

router.get('/my_bubble_chart', function(req, res) {
    res.render('my_bubble_chart')
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

router.get('/the_words_they_used', function(req, res) {
    res.render('the_words_they_used')
});

router.get('/the_words_they_used2', function(req, res) {
    res.render('the_words_they_used2')
});

router.get('/politilines', function(req, res) {
    res.render('politilines')
});

router.get('/politilines2', function(req, res) {
    res.render('politilines2')
});

///////////////////////////////////////////////////////////////////////////////

module.exports = router;
