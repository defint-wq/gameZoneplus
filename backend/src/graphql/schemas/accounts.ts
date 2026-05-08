export const types = () => `

    type Comment {
    _id: String!
    userId: String!
    text: String!
    createdAt: String!
  }

  type Account {
    _id: String!
    title: String!
    skins: Int!
    winRate: Float!
    price: Float!
    badge: String!
    region: String!
    description: String!
    isVerified: Boolean!
    likes: [String]!
    comments: [Comment]
  }



  type PageInfo {
    totalPages: Int
    currentPage: Int
    hasNextPage: Boolean
    hasPreviousPage: Boolean
  }

  type AccountsListResponse {
    list: [Account]
    pageInfo: PageInfo
    totalCount: Int
  }
`;

const accountParams = `
  title: String!
  skins: Int!
  winRate: Float!
  price: Float!
  badge: String!
  region: String!
  description: String!
  isVerified: Boolean!
  likes: [String]!
`;

export const queries = `
  accounts: [Account]!
`;

export const mutations = `
  accountAdd(${accountParams}): Account
  accountEdit(_id: String!, ${accountParams}): Account
  accountsRemove(ids: [String]!): String

  accountLike(_id: String!, userId: String!): Account
  accountUnlike(_id: String!, userId: String!): Account
  commentAdd(_id: String!, userId: String!, text: String!): Account
  commentRemove(_id: String!, commentId: String!): Account
`;
