export const types = () => `
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
    comments: [String]!
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
  comments: [String]!
`;

export const queries = `
  accounts: [Account]!
`;

export const mutations = `
  accountAdd(${accountParams}): Account
  accountEdit(_id: String!, ${accountParams}): Account
  accountsRemove(ids: [String]!): String
`;
