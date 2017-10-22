var express = require('express');
var router = express.Router();
var outpostController = require('../controller/outpost-controller');

router.get('/', (req, res) => {
    outpostController.getOutpost()
    .then((response) => {
        res.json(response);
    })
    .catch((error) => {
        throw error;
    })
})

module.exports = router;