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
  level: {
    type: Int,
    required: true,
  },
  sprite: {
    type: String,
    required: true,
  },
  stat1: {
    type: Int,
    required: true,
  },
  stat2: {
    type: Int,
    required: true,
  },
  stat3: {
    type: Int,
    required: true,
  },
});

const Monster = model('Monster', monsterSchema);

module.exports = Monster;
