import moment from "moment";
const UserSymptomDetail = {
  symptom: async (parent, args, { request, db }, info) => {
    const _symptomDetail = await db.SymptomDetail.findByPk(
      parent.symptomDetailId
    );
    const _symptom = await db.Symptom.findByPk(
      _symptomDetail.dataValues.symptomId
    );
    const { dataValues: s } = _symptom;
    const symptom = {
      ...s,
      id: s.id.toString(),
      createdAt: moment(s.createdAt).format("YYYYMMDDhhmmss"),
      updatedAt: moment(s.updatedAt).format("YYYYMMDDhhmmss")
    };
    return symptom;
  },
  user: async (parent, args, { request, db }, info) => {
    const _user = await db.User.findByPk(parent.userId);
    const { dataValues: user } = _user;
    const symptom = {
      ...user,
      id: user.id.toString(),
      createdAt: moment(user.createdAt).format("YYYYMMDDhhmmss"),
      updatedAt: moment(user.updatedAt).format("YYYYMMDDhhmmss")
    };
    return symptom;
  },
  symptomDetail: async (parent, args, { request, db }, info) => {
    const _symptomDetail = await db.SymptomDetail.findByPk(
      parent.symptomDetailId
    );
    const { dataValues: sd } = _symptomDetail;
    const symptomDetail = {
      ...sd,
      id: sd.id.toString(),
      createdAt: moment(sd.createdAt).format("YYYYMMDDhhmmss"),
      updatedAt: moment(sd.updatedAt).format("YYYYMMDDhhmmss")
    };
    return symptomDetail;
  }
};
export { UserSymptomDetail as default };
