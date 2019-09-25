const mongoose = require('mongoose');
const Movie = require('../models/movies');

const dbName = 'MongooseMovies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "7th son",
    genre : "horror",
    plot : "people - forest - chainsaw - dead"
  },
  {
    title: "7th son of 7th son",
    genre : "horror",
    plot : "more people - forest - more chainsaws - dead :)"
  },
  {
    title: "7th son of 7th son of 7th son",
    genre : "horror",
    plot : "zombies"
  },
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});