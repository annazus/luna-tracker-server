import db from "../database";
db.connection.sync();

const createData = async () => {
  //   const user = await db.User.create({
  //     name: "suzanna kovoor",
  //     email: "kmsuzanna@gmail.com"
  //   });

  //     const symptom = await db.Symptom.create({
  //       name: "Bleeding",
  //       description: "Bleeding",
  //       isExclusive: true
  //     });

  //   let symptomDetail = await db.SymptomDetail.create({
  //     symptomId: symptom.dataValues.id,
  //     name: "Light",
  //     description: "Light"
  //   });
  //   symptomDetail = await db.SymptomDetail.create({
  //     symptomId: symptom.dataValues.id,
  //     name: "Medium",
  //     description: "Medium"
  //   });

  //   symptomDetail = await db.SymptomDetail.create({
  //     symptomId: symptom.dataValues.id,
  //     name: "Heavy",
  //     description: "Heavy"
  //   });

  //   symptomDetail = await db.SymptomDetail.create({
  //     symptomId: symptom.dataValues.id,
  //     name: "Spotting",
  //     description: "Spotting"
  //   });

  const symptom = await db.Symptom.create({
    name: "Pain",
    description: "Pain",
    isExclusive: false
  });

  let symptomDetail = await db.SymptomDetail.create({
    symptomId: symptom.dataValues.id,
    name: "Cramps",
    description: "Cramps"
  });
  symptomDetail = await db.SymptomDetail.create({
    symptomId: symptom.dataValues.id,
    name: "Headache",
    description: "Headache"
  });

  symptomDetail = await db.SymptomDetail.create({
    symptomId: symptom.dataValues.id,
    name: "Ovulation",
    description: "Ovulation"
  });

  symptomDetail = await db.SymptomDetail.create({
    symptomId: symptom.dataValues.id,
    name: "Tender Breasts",
    description: "Tender Breasts"
  });
};
createData();

// User.sync({ force: true })
//   .then(() => {

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
