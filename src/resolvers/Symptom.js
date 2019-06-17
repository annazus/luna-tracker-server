import moment from "moment";
const Symptom = {
  symptomDetails: async (parent, args, { request, db }, info) => {
    console.log("parent", parent.id);
    const _symptomDetails = await db.SymptomDetail.findAll({
      where: { symptomId: parent.id }
    });

    const symptomDetails = _symptomDetails.map(({ dataValues: sd }) => ({
      ...sd,
      id: sd.id.toString(),
      createdAt: moment(sd.createdAt).format("YYYYMMDDhhmmss"),
      updatedAt: moment(sd.updatedAt).format("YYYYMMDDhhmmss")
    }));

    return symptomDetails;
  }
};
export { Symptom as default };
