var express = require('express');
var router = express.Router();
var userController = require('../controller/user-controller');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  userController.getUser(req.params.id)
  .then((response) => {
    res.json(response);
  })
  .catch(err => {
    if(err) {
      res.send(err);
    }
  })
});

router.get('/vacine/ok/:id', (req, res) => {
  userController.getInTimeVacine(req.params.id)
  .then((response) => {
    res.send(response);
  })
  .catch((error) => {
    throw error;
  })
})

router.get('/vacine/late/:id', (req, res) => {
  userController.getOutTimeVacine(req.params.id)
  .then((response) => {
    res.send(response);
  })
  .catch((error) => {
    throw error;
  })
})

router.get('/vacine/comming/:id', (req, res) => {
  userController.getToComeVacine(req.params.id)
  .then((response) => {
    res.send(response);
  })
  .catch((error) => {
    throw error;
  })
})

module.exports = router;
