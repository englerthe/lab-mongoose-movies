const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(dataFromDB => {
      res.render('celebrities/index', { celebrities: dataFromDB });
    })
    .catch(error => {
      console.log('Error while getting the data from the DB: ', error);
      next();
    })
});

router.get('/new', (req, res, next) => {
      res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase})
    console.log(newCelebrity);
    newCelebrity.save()
    .then((Celebrity) => {
      res.redirect('/celebrities/');
    })
    .catch((error) => {
        res.render('celebrities/new');
    })
  });

router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then((Celebrity) => {
      res.redirect('/celebrities/');
    })
    .catch((error) => {
        console.log('Error while getting the data from the DB: ', error);
        next();
    })
  });

router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
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