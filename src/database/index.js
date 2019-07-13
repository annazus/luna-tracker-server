import Sequelize from "sequelize";
import * as definitions from "./models";
const connection = new Sequelize(
  process.env.DATABASE_URL,

  {
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    },
    logging: null,
    schema: process.env.DATABASE_SCHEMA
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

const createModels = () => {
  let db = {};
  for (const name in definitions) {
    console.log("Creating " + name);
    const model = definitions[name](connection);
    if (model) db[name] = model;
  }

  Object.keys(db).forEach(model => {
    if (db[model].associate) {
      db[model].associate(db);
    }
  });

  db.connection = connection;
  return db;
};

export { createModels as default };
