import gql from "graphql-tag";

export const ENTRIES_QUERY = gql`
  query($page: Int!) {
    entries(pagination: { page: $page }) {
      name
      source
      description
    }
  }
`;
