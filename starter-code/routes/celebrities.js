const express = require('express');
const router  = express.Router();

const celebrity = require("../models/celebrity.js");

/* GET home page */
router.get('/', (req, res, next) => {
    celebrity.find()
    .then(dataFromDB => {
      res.render('celebrities/index', { celebrities: dataFromDB });
    })
    .catch(error => {
      console.log('Error while getting the data from the DB: ', error);
      next();
    })
});

router.get('/:id', (req, res, next) => {
    celebrity.findById(req.params.id)
    .then(dataFromDB => {
        console.log(dataFromDB);
      res.render('celebrities/show', {celebrities: dataFromDB});
    })
    .catch(error => {
      console.log('Error while getting the data from the DB: ', error);
      next();
    })
});

module.exports = router;