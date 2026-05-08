import { gql } from "@apollo/client";

export const ACCOUNT_ADD = gql`
  mutation AccountAdd(
    $title: String!
    $skins: Int!
    $winRate: Float!
    $price: Float!
    $badge: String!
    $region: String!
    $description: String!
    $isVerified: Boolean!
    $likes: [String]!
  ) {
    accountAdd(
      title: $title
      skins: $skins
      winRate: $winRate
      price: $price
      badge: $badge
      region: $region
      description: $description
      isVerified: $isVerified
      likes: $likes
    ) {
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

export const ACCOUNT_LIKE = gql`
  mutation AccountLike($_id: String!, $userId: String!) {
    accountLike(_id: $_id, userId: $userId) {
      _id
      likes
    }
  }
`;

export const ACCOUNT_UNLIKE = gql`
  mutation AccountUnlike($_id: String!, $userId: String!) {
    accountUnlike(_id: $_id, userId: $userId) {
      _id
      likes
    }
  }
`;

export const COMMENT_ADD = gql`
  mutation CommentAdd($_id: String!, $userId: String!, $text: String!) {
    commentAdd(_id: $_id, userId: $userId, text: $text) {
      _id
      comments {
        _id
        userId
        text
        createdAt
      }
    }
  }
`;

export const COMMENT_REMOVE = gql`
  mutation CommentRemove($_id: String!, $commentId: String!) {
    commentRemove(_id: $_id, commentId: $commentId) {
      _id
      comments {
        _id
        userId
        text
        createdAt
      }
    }
  }
`;
