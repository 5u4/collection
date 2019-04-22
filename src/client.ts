import ApolloBoost from "apollo-boost";

export const client = new ApolloBoost({
  uri: process.env.VUE_APP_SERVER_URI || "http://localhost:13428"
});
