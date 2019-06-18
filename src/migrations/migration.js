import db from "../database";

const createData = async () => {
  const user = await db.User.create({
    name: "suzanna kovoor",
    password: "true",
    email: "kmsuzanna@gmail.com"
  });

  let symptom = await db.Symptom.create({
    name: "Bleeding",
    description: "Bleeding",
    isExclusive: true
  }).then(async symptom => {
    let symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Light",
      description: "Light"
    });
    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Medium",
      description: "Medium"
    });

    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Heavy",
      description: "Heavy"
    });

    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Spotting",
      description: "Spotting"
    });
  });

  symptom = await db.Symptom.create({
    name: "Pain",
    description: "Pain",
    isExclusive: false
  }).then(async symptom => {
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
  });

  symptom = await db.Symptom.create({
    name: "Emotions",
    description: "Emotions",
    isExclusive: false
  }).then(async symptom => {
    let symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Happy",
      description: "Happy"
    });
    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Sensitive",
      description: "Sensitive"
    });

    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Sad",
      description: "Sad"
    });

    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "PMS",
      description: "PMS"
    });
  });

  symptom = await db.Symptom.create({
    name: "Sleep",
    description: "Sleep",
    isExclusive: true
  }).then(async symptom => {
    let symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "0 to 3 hrs",
      description: "0 to 3 hrs"
    });
    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "3 to 6 hrs",
      description: "3 to 6 hrs"
    });

    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "6 to 9 hours",
      description: "6 to 9 hours"
    });

    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "9 hours or more",
      description: "9 hours or more"
    });
  });

  symptom = await db.Symptom.create({
    name: "Energy",
    description: "Energy",
    isExclusive: false
  }).then(async symptom => {
    let symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Energized",
      description: "Energized"
    });
    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "High",
      description: "High"
    });

    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Low",
      description: "Low"
    });

    symptomDetail = await db.SymptomDetail.create({
      symptomId: symptom.dataValues.id,
      name: "Exhausted",
      description: "Exhausted"
    });
  });
};

const createDb = () => {
  db.connection
    .drop({ force: true })
    .then(() => db.connection.sync().then(() => createData()));
};
export { createDb as default };

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
