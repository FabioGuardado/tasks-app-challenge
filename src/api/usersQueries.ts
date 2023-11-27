import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getAllUsers {
    users {
      avatar
      fullName
      id
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query getUserProfile {
    profile {
      id
      avatar
      createdAt
      email
      fullName
      type
      updatedAt
    }
  }
`;

export const GET_USER_AVATAR = gql`
  query getUserAvatar {
    profile {
      avatar
    }
  }
`;

export default GET_USERS;
