import gql from "graphql-tag";

export const SEARCH_QUERY = gql`
  query($keyword: String!) {
    entries(filter: { keyword: $keyword }, pagination: { perPage: 5 }) {
      name
      source
    }
  }
`;
