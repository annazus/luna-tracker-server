import moment from "moment";
const Mutation = {
  createUser: () => {
    console.log("createUser");
    return "sfdf";
  },
  createUserSymptomDetail: async (parent, { data }, { request, db }, info) => {
    console.log(data);
    const { dataValues: usd } = await db.UserSymptomDetail.create({
      userId: data.user,
      symptomDetailId: data.symptomDetail,
      date: moment(data.date)
    });
    console.log(usd);
    return {
      ...usd,
      id: usd.id.toString(),
      date: moment(usd.date).format("YYYYMMDD"),
      // userId: usd.userId.toString(),
      // symptomDetailId: usd.symptomDetailId.toString(),
      createdAt: moment(usd.createdAt).format("YYYYMMDDhhmmss"),
      updatedAt: moment(usd.updatedAt).format("YYYYMMDDhhmmss")
    };
  },
  deleteUserSymptomDetail: async (
    parent,
    { userSymptomDetailId },
    { request, db },
    info
  ) => {
    console.log("deleteUserSymptomDetail", userSymptomDetailId);
    const record = await db.UserSymptomDetail.findByPk(userSymptomDetailId);
    const usd = await record.destroy();
    console.log(usd);
    return {
      ...record,
      id: record.id.toString(),
      date: moment(record.date).format("YYYYMMDD"),

      userId: record.userId.toString(),
      symptomDetailId: record.symptomDetailId.toString(),
      createdAt: moment(record.createdAt).format("YYYYMMDDhhmmss"),
      updatedAt: moment(record.updatedAt).format("YYYYMMDDhhmmss")
    };
  }
};
export { Mutation as default };
