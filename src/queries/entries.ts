import gql from "graphql-tag";

export const ENTRIES_QUERY = gql`
  query {
    entries {
      id
      name
      source
      description
    }
  }
`;
