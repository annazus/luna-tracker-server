import moment from "moment";
import bcrypt from "bcryptjs";
import getToken from "../utils/getToken";
import getUserId from "../utils/getUserId";
import getHashPassword from "../utils/getHashPassword";
const Mutation = {
  createUser: async (parent, { data }, { db, request }, info) => {
    const hashPassword = await getHashPassword(data.password);

    const user = await db.User.create({
      name: data.name,
      password: hashPassword,
      email: data.email
    });
    return {
      user: user.dataValues,
      token: getToken(user.dataValues.id)
    };
  },
  loginUser: async (parent, { data }, { db }, info) => {
    const user = await db.User.findOne({ where: { email: data.email } });

    if (!user) throw new Error("User not found");

    if (!bcrypt.compare(user.dataValues.password))
      throw new Error("User not found");

    return {
      user: user.dataValues,
      token: getToken(user.dataValues.id)
    };
  },
  createUserSymptomDetail: async (parent, { data }, { request, db }, info) => {
    console.log("createUserSymptomDetail", data);
    const userId = getUserId(request);

    const { dataValues: usd } = await db.UserSymptomDetail.create({
      userId: userId,
      symptomDetailId: data.symptomDetail,
      date: moment(data.date)
    });
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
    const userId = getUserId(request);

    const record = await db.UserSymptomDetail.findByPk(userSymptomDetailId);
    if (record.userId !== userId)
      throw new Error("You do not have permission to delete this record");
    const usd = await record.destroy();
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
