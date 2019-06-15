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
      type: Sequelize.DATEONLY,
      unique: "UserSymptomDetail"
    }
  });

  usersymptomdetail.associate = models => {
    models.UserSymptomDetail.belongsTo(models.User, {
      foreignKey: { allowNull: false, unique: "UserSymptomDetail" }
    });
    models.UserSymptomDetail.belongsTo(models.SymptomDetail, {
      foreignKey: { allowNull: false, unique: "UserSymptomDetail" }
    });
  };
  return usersymptomdetail;
};
export { UserSymptomDetail as default };
