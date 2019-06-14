import { getFirstName } from "./utils/user";
import db from "./database";
console.log("testing again", getFirstName("suzie, kovoor"));
db.connection.sync();

// const User = server.define("user", {
//   id: {
//     type: Sequelize.UUID,
//     primaryKey: true,
//     defaultValue: Sequelize.UUIDV4,
//     allowNull: false
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   }
// });

// User.sync({ force: true })
//   .then(() => {
//     return User.create({
//       name: "suzanna kovoor",
//       email: "kmsuzanna@gmail.com"
//     });
//   })
//   .then(user => console.log(user), error => console.log(error));

// const Symptom = server.define("symptom", {
//   id: {
//     type: Sequelize.UUID,
//     primaryKey: true,
//     defaultValue: Sequelize.UUIDV4,
//     allowNull: false
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   description: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   isExclusive: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false
//   }
// });
// Symptom.sync({ force: true }).then(() => {
//   Symptom.create({
//     name: "Pain",
//     description: "Pain",
//     isExclusive: false
//   }).then(symptom => console.log(symptom), error => console.log(error));
// });

// const SymptomDetail = server.define("symptom_detail", {
//   id: {
//     type: Sequelize.UUID,
//     primaryKey: true,
//     defaultValue: Sequelize.UUIDV4,
//     allowNull: false
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   description: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   }
// });
// SymptomDetail.belongsTo(Symptom, { foreignKey: { allowNull: false } });

// SymptomDetail.sync({ force: true }).then(() => {
//   SymptomDetail.create({
//     symptomId: 1,
//     name: "Lighjt",
//     description: "How much of bleeding"
//   }).then(sd => console.log(sd), error => console.log(error));
// });

// const SymptomHistory = server.define("symptom_history", {
//   id: {
//     type: Sequelize.UUID,
//     primaryKey: true,
//     defaultValue: Sequelize.UUIDV4,
//     allowNull: false
//   },
//   date: {
//     type: Sequelize.DATEONLY
//   }
// });
// SymptomHistory.belongsTo(User, { foreignKey: { allowNull: false } });
// SymptomHistory.belongsTo(SymptomDetail, { foreignKey: { allowNull: false } });

// SymptomHistory.sync({ force: true }).then(() => {
//   SymptomHistory.create({
//     userId: 1,
//     symptomDetailId: 1,
//     date: Date.now()
//   }).then(sd => console.log(sd), error => console.log(error));
// });
