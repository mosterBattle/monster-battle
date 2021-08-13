const { AuthenticationError } = require('apollo-server-express');
const { User, Monster } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('monsters');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('monsters');
    },
    monsters: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Monster.find(params).sort({ createdAt: -1 });
    },
    monster: async (parent, { monsterId }) => {
      return Monster.findOne({ _id: monsterId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('monsters');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password, wins: 0, totalMatches: 0, gold: 0 });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addMonster: async (parent, { name, level, sprite, hp, str, def, spd, swg }, context) => {
      if (context.user) {
        const monster = await Monster.create({
          // wtf goes here,
          name,
          level,
          sprite,
          owner: context.user.username,
          hp,
          str,
          def,
          spd,
          swg

        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { monsters: monster._id } }
        );

        return monster;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeMonster: async (parent, { monsterId }, context) => {
      if (context.user) {
        const monster = await Monster.findOneAndDelete({
          _id: monsterId,
          owner: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { monsters: monster._id } }
        );

        return monster;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
