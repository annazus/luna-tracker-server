import { GraphQLServer, PubSub } from "graphql-yoga";
import db from "./database";
import { resolvers } from "./resolvers";

db.connection.sync();
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context(request) {
    return { request, db };
  }
});

export { server as default };
