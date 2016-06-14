var express = require('express');
var router = express.Router();




module.exports = function(db){


    /* GET users listing. */
    router.post('/', function(req, res, next) {
        var objectToSave = req.body;

        console.log(objectToSave);

        db.collection('temp').insert(objectToSave).then(function () {
            res.status(200).send({synced: true});
        });

    });

    return router;
};
