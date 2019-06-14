import db from "../database";
function getFirstName(fullName) {
  return fullName.split(",")[0];
}
// db.connection.sync();

export { getFirstName };
