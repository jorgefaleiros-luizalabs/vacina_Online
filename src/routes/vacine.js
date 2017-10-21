var express = require('express');
var router = express.Router();
var vacineController = require('../controller/vacine-controller');

router.get('/status', (req, res) => {
    vacineController.getVacineStatus(req.params.id)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      throw error;
    })
})

module.exports = router;