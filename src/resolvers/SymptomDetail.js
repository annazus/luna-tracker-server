import moment from "moment";
const SymptomDetail = {
  symptom: async (parent, args, { request, db }, info) => {
    const _symptom = await db.Symptom.findByPk(parent.symptomId);
    const { dataValues: sd } = _symptom;
    const symptom = {
      ...sd,
      id: sd.id.toString(),
      createdAt: moment(sd.createdAt).format("YYYYMMDDhhmmss"),
      updatedAt: moment(sd.updatedAt).format("YYYYMMDDhhmmss")
    };
    return symptom;
  }
};
export { SymptomDetail as default };
