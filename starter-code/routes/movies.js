const express = require('express');
const router  = express.Router();

const Movie = require("../models//movies.js");

router.get('/', (req, res, next) => {
    Movie.find()
    .then(dataFromDB => {
      res.render('movies/index', { movies: dataFromDB });
    })
    .catch(error => {
      console.log('Error while getting the data from the DB: ', error);
      next();
    })
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot})
  newMovie.save()
  .then((Celebrity) => {
    res.redirect('/movies/');
  })
  .catch((error) => {
    res.render('movies/new');
  })
});

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then((Movie) => {
    res.redirect('/movies/');
  })
  .catch((error) => {
      console.log('Error while getting the data from the DB: ', error);
      next();
  })
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(dataFromDB => {
  Movie.findById(req.params.id)
    res.render('movies/edit', {movies: dataFromDB});
  })
  .catch(error => {
    console.log('Error while getting the data from the DB: ', error);
    next();
  })
});

router.post('/:id', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update({_id: req.params.id}, 
      { $set: {title, genre, plot}})
  .then((Movie) => {
      res.redirect('/movies/');
  })
  .catch((error) => {
      console.log('Error while getting the data from the DB: ', error);
      next();
  })
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(dataFromDB => {
    res.render('movies/show', {movies: dataFromDB});
  })
  .catch(error => {
    console.log('Error while getting the data from the DB: ', error);
    next();
  })
});

module.exports = router;