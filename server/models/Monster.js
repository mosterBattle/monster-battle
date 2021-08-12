const { Schema, model } = require('mongoose');

const monsterSchema = new Schema({
  // thoughtText: {
  //   type: String,
  //   required: 'You need to leave a thought!',
  //   minlength: 1,
  //   maxlength: 280,
  //   trim: true,
  // },
  // thoughtAuthor: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  //   get: (timestamp) => dateFormat(timestamp),
  // },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: Number,
    required: true,
  },
  sprite: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: String,
    required: true,
    trim: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  str: {
    type: Number,
    required: true,
  },
  def: {
    type: Number,
    required: true,
  },
  spd: {
    type: Number,
    required: true,
  },
  swg: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Monster = model('Monster', monsterSchema);

module.exports = Monster;
