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
      date: moment(usd.date).format("YYYMMDD"),
      // userId: usd.userId.toString(),
      // symptomDetailId: usd.symptomDetailId.toString(),
      createdAt: moment(usd.createdAt).format("YYYYMMDDhhmmss"),
      updatedAt: moment(usd.updatedAt).format("YYYYMMDDhhmmss")
    };
  }
};
export { Mutation as default };
