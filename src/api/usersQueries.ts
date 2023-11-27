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

export default GET_USERS;
