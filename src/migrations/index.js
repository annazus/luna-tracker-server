import { createData, dropDb } from "./migration";
dropDb().then(() => {
  createData();
});
