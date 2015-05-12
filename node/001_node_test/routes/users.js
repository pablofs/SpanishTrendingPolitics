var express = require('express');
var router = express.Router();

/* GET Document list page. */
router.get('/documentlist', function(req, res) {
    var db = req.db;
    db.collection('document').find({"date": {"$gte": new Date(2015, 1, 1), "$lt": new Date()}}).toArray(function (err, items) {
        res.json(items);
    });	
});

/*
 * POST to document by date.
 */
router.post('/documentbydate', function(req, res) {
    var db = req.db;
	var date = req.body.date;
	console.log(date);
    db.collection('document').find({"date" : new Date(date)}).toArray(function (err, items) {
		// console.log(items);
        return res.json(items);
    });	
});

module.exports = router;
