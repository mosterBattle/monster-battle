const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    monsters: [Monster]!
  }

  type Monster {
    _id: ID
    name: String
    level: Number
    sprite: String
    owner: String
    stats: []!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    monsters(username: String): [Monster]
    monster(monsterId: ID!): Monster
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMonster(thoughtText: String!): Monster //THIS LINE NEEDS WORK
    removeMonster(monsterId: ID!): Monster
  }
`;

module.exports = typeDefs;
