var express = require('express');
var router = express.Router();

/* GET Document list page. */
router.get('/documentlist', function(req, res) {
    var db = req.db;
    db.collection('document').find().toArray(function (err, items) {
        res.json(items);
    });	
});

module.exports = router;
