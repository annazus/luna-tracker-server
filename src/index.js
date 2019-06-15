import { getFirstName } from "./utils/user";
import server from "./server";
server.start({ port: 4000 }, () => {
  console.log("Graphql server is up");
});
// import migration from "./migrations/migration";
