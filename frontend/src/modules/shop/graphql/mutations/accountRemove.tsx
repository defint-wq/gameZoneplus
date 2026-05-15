import { gql } from "@apollo/client";

export const ACCOUNT_REMOVE = gql`
  mutation AccountsRemove($ids: [String]!) {
    accountsRemove(ids: $ids)
  }
`;
