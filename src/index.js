import { getFirstName } from "./utils/user";
// import createData from "./migrations/migration";

import server from "./server";
server.start({ port: process.env.PORT }, () => {
  console.log("Graphql server is up");
});

// createData();
