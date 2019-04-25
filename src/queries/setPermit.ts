import gql from "graphql-tag";

export const SET_PERMIT_QUERY = gql`
  mutation($token: String!) {
    setPermit(token: $token)
  }
`;
