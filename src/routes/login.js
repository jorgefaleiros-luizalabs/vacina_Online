var express = require('express');
var router = express.Router();
var loginController = require('../controller/login-controller');

router.post('/', (req, res) => {
    loginController.getLogin(req.body.susCard, req.body.birthDate)
      .then((response) => {
        res.send(response);    
    })
    .catch(error => {
        throw error;
    })
})


module.exports = router;
