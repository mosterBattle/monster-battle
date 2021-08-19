const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    monsters: [Monster]!
    totalMatches: Int
    wins: Int
    gold: Int
  }

  type Monster {
    _id: ID
    name: String
    level: Int
    sprite: String
    owner: String
    hp: Int
    str: Int
    def: Int
    spd: Int
    swg: Int
    wins: Int
    losses: Int
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
    addMonster(name: String!, level: Int!, hp: Int!, str: Int!, def: Int!, spd: Int!, swg: Int!): Monster
    removeMonster(monsterId: ID!): Monster
  }
`;

module.exports = typeDefs;
