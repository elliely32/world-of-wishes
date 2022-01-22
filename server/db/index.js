//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Wish = require('./model/Wish')

//associations could go here!
User.hasMany(Wish);
Wish.belongsTo(User);


module.exports = {
  db,
  models: {
    User,
    Wish
  },
}
