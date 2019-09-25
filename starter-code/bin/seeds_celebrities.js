const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'MongooseMovies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Johnny Depp",
    occupation : "actor",
    catchPhrase : "The only creatures that are evolved enough to convey pure love are dogs and infants."
  },
  {
    name: "Boris Becker",
    occupation : "athletics",
    catchPhrase : "Am I already in?"
  },
  {
    name: "Alice Cooper",
    occupation : "singer",
    catchPhrase : "The hippies wanted peace and love. We wanted Ferraris, blondes and switchblades."
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrity`)
  mongoose.connection.close();
});