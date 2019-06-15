import moment from "moment";
const Query = {
  hello: (parent, args, { request, db }, info) => {
    return "Hello";
  },
  me: async (parent, args, { request, db }, info) => {
    const { dataValues: user } = await db.User.findOne({
      where: {
        email: "kmsuzanna@gmail.com"
      }
    });
    return { ...user, id: user.id.toString() };
  },
  symptoms: async (parent, args, { request, db }, info) => {
    const _symptoms = await db.Symptom.findAll();
    const symptoms = _symptoms.map(({ dataValues: symptom }) => ({
      ...symptom,
      id: symptom.id.toString(),
      createdAt: moment(symptom.createdAt).format("YYYYMMDDhhmmss"),
      updatedAt: moment(symptom.updatedAt).format("YYYYMMDDhhmmss")
    }));
    return symptoms;
  },
  symptomDetails: async (parent, args, { request, db }, info) => {
    const _symptomDetails = await db.SymptomDetail.findAll();
    const symptomDetails = _symptomDetails.map(({ dataValues }) => {
      return {
        ...dataValues,
        id: dataValues.id.toString(),
        symptomId: dataValues.symptomId.toString(),
        createdAt: moment(dataValues.createdAt).format("YYYYMMDDhhmmss"),
        updatedAt: moment(dataValues.updatedAt).format("YYYYMMDDhhmmss")
      };
    });
    return symptomDetails;
  },
  userSymptomDetails: async (parent, args, { request, db }, info) => {
    const _userSymptomDetails = await db.UserSymptomDetail.findAll();
    const userSymptomDetails = _userSymptomDetails.map(
      ({ dataValues: usd }) => {
        return {
          ...usd,
          id: usd.id.toString(),
          date: moment(usd.date).format("YYYMMDD"),
          //   userId: usd.userId.toString(),
          symptomDetailId: usd.symptomDetailId.toString(),
          createdAt: moment(usd.createdAt).format("YYYYMMDDhhmmss"),
          updatedAt: moment(usd.updatedAt).format("YYYYMMDDhhmmss")
        };
      }
    );
    return userSymptomDetails;
  }
};

export { Query as default };
// createUserSymptomDetail(data: CreateUserSymptomDetail): UserSymptomDetail!
