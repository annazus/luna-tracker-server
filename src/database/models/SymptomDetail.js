import Sequelize from "sequelize";

const SymptomDetail = connection => {
  const symptomDetail = connection.define("symptom_detail", {
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
    }
  });

  symptomDetail.associate = models => {
    models.SymptomDetail.belongsTo(models.Symptom, {
      foreignKey: { allowNull: false }
    });
  };

  return symptomDetail;
};
export { SymptomDetail as default };
