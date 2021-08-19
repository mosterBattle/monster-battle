import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MONSTER = gql`
  mutation addMonster($name: String!, $level: Int!, $hp: Int!, $str: Int!, $def: Int!, $spd: Int!, $swg: Int!) {
    addMonster(name: $name, level: $level, hp: $hp, str: $str, def: $def, spd: $spd, swg: $swg) {
      _id
      name
      level
      owner
      hp
      str
      def
      spd
      swg
    }
  }
`;

export const ADD_GOLD = gql`
  mutation addGold($userId: ID, $gold: Int!) {
    addGold(userId: $userId, gold: $gold) {
      _id
      username
      gold
    }
  }
`