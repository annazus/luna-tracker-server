import Sequelize from "sequelize";

const Symptom = connection => {
  const symptom = connection.define("symptom", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    isExclusive: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  });

  return symptom;
};

export { Symptom as default };
