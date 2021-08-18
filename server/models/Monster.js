const { Schema, model } = require('mongoose');

const monsterSchema = new Schema({
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
  },
  wins: {
    type: Number,
    required: true,
  },
  losses: {
    type: Number,
    required: true,
  },
});

const Monster = model('Monster', monsterSchema);

module.exports = Monster;
