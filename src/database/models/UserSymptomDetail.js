import Sequelize from "sequelize";
const UserSymptomDetail = connection => {
  const usersymptomdetail = connection.define("user_symptom_detail", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    date: {
      type: Sequelize.DATEONLY
    }
  });

  usersymptomdetail.associate = models => {
    models.UserSymptomDetail.belongsTo(models.User, {
      foreignKey: { allowNull: false }
    });
    models.UserSymptomDetail.belongsTo(models.SymptomDetail, {
      foreignKey: { allowNull: false }
    });
  };
  return usersymptomdetail;
};
export { UserSymptomDetail as default };
