import moment from "moment";
const User = {
  userSymptomDetails: async (parent, args, { request, db }, info) => {
    const _userSymptomDetails = await db.UserSymptomDetail.findAll();

    const userSymptomDetails = _userSymptomDetails.map(
      ({ dataValues: usd }) => ({
        ...usd,
        id: usd.id.toString(),
        date: moment(usd.date).format("YYYMMDD"),
        symptomDetailId: usd.symptomDetailId.toString(),
        createdAt: moment(usd.createdAt).format("YYYYMMDDhhmmss"),
        updatedAt: moment(usd.updatedAt).format("YYYYMMDDhhmmss")
      })
    );

    return userSymptomDetails;
  }
};
export { User as default };
