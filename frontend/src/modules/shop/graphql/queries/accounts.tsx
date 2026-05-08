import { gql } from "@apollo/client";

export const ACCOUNTS = gql`
  query Accounts {
    accounts {
      _id
      title
      skins
      winRate
      price
      badge
      region
      description
      isVerified
      likes
      comments {
        _id
        userId
        text
        createdAt
      }
    }
  }
`;
