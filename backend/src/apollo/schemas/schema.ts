import {
  mutations as accountMutations,
  queries as accountQueries,
  types as accountTypes,
} from "../../graphql/schemas/accounts";

export const types = `
${accountTypes()}
`;

export const queries = `
${accountQueries}
`;

export const mutations = `
${accountMutations}
`;
