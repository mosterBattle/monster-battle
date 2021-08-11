import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      monsters {
        _id
        name
        level
        sprite
        hp
        str
        def
        spd
        swg
      }
    }
  }
`;

export const QUERY_MONSTERS = gql`
  query getMonsters {
    monsters {
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

export const QUERY_SINGLE_MONSTER = gql`
  query getSingleMonster($monsterId: ID!) {
    monster(monsterId: $monsterId) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      monsters {
        _id
        name
        level
        sprite
        hp
        str
        def
        spd
        swg
      }
    }
  }
`;
