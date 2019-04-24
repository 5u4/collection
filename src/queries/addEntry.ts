import gql from "graphql-tag";

export const ADD_ENTRY_QUERY = gql`
  mutation($source: String!) {
    addEntry(entryInput: { source: $source }) {
      name
    }
  }
`;
