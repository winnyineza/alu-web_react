import { RowElement, RowID } from "./interface";
import * as crud from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = crud.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };

crud.updateRow(newRowID, updatedRow);
crud.deleteRow(newRowID);