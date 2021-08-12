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
  mutation addMonster($name: String!, $level: Int!, $sprite: String!, $hp: Int!, $str: Int!, $def: Int!, $spd: Int!, $swg: Int!) {
    addMonster(name: $String, level: $Int, sprite: $String, hp: $Int, str: $Int, def: $Int, spd: $Int, swg: $Int) {
      _id
      name
      level
      sprite
      owner
      hp
      str
      def
      spd
      swg
    }
  }
`;