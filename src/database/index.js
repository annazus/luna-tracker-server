import Sequelize from "sequelize";
import * as definitions from "./models";
const connection = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,

  {
    host: process.env.PG_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    }
  }
);

connection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// const user = definitions["User"](connection);
// console.log();
let db = {};
for (const name in definitions) {
  const model = definitions[name](connection);
  db[name] = model;
  console.log(name);
}

Object.keys(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

db.connection = connection;

connection.sync();
console.log("RPINGING AGAIN");
export { db as default };
