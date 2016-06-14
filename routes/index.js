var express = require('express');
var router = express.Router();


module.exports = function (db) {

    /* GET home page. */
    router.get('/', function (req, res, next) {
        db.collection('temp').find().sort({ $natural: -1 }).limit(50).toArray().then(function (results) {
            res.send({results: results.reverse()});
        });
    });

    return router;
};
