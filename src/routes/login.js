var express = require('express');
var router = express.Router();
var loginController = require('../controller/login-controller');

router.get('/', (req, res) => {
    loginController.getLogin(req.params.id).then((response) => {
        res.send(response);    
    })
    .catch((error) => {
        throw error;
    })
})


module.exports = router;