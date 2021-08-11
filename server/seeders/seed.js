const db = require('../config/connection');
const { User, Monster } = require('../models');
const userSeeds = require('./userSeeds.json');
const monsterSeeds = require('./monsterSeeds.json');

db.once('open', async () => {
  try {
    await Monster.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < monsterSeeds.length; i++) {
      const { _id, owner } = await Monster.create(monsterSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: owner },
        {
          $addToSet: {
            monsters: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
