import { addUserToTable, createDefaultTable, deleteDefaultTable, deleteUserFromTable, getUserCapabilitiesFromTableWithRole, getUserFromTableWithId, getUserFromTableWithRole, updateUserFromTable } from "../database/service";
import { User } from "../database/serviceClasses";
import { pl } from "../services/loggerService";
// runs all backend codes from server to check codes are working
export default async function () {
  console.log()
  console.log("CreateTableTestService Runs ToCreate Default Table")
  const users: User[] = [
    { role: "Manager", capabilities: ["ManageBusinessUnits", "UploadData", "ReadData", "EditData"] },
    { role: "SystemAdmin", capabilities: ["ManageBusinessUnits", "UploadData", "ReadData", "EditData"] },
    { role: "Analysts", capabilities: ["UploadData", "ReadData", "EditData"] },
    { role: "Enginer", capabilities: ["UploadData"] },
    { role: "Enginer", capabilities: ["UploadData"] },
  ]
  await pl(deleteDefaultTable)
  await pl(createDefaultTable)
  for (let userIndex in users) { await pl(addUserToTable, [users[userIndex]]) }
  await pl(deleteUserFromTable, [{ id: 3 }])
  await pl(updateUserFromTable, [4, { role: "Marketing", capabilities: ["EditData", "ManageProducts"] }])
  await pl(addUserToTable, [{ role: "Developer", capabilities: ["ManageBusinessUnits", "UploadData", "ReadData", "EditData"] }])
  await pl(getUserFromTableWithId, [4])
  await pl(getUserFromTableWithRole, ["Developer"])
  await pl(getUserCapabilitiesFromTableWithRole, ["Developer"])
  console.log("CreateTableTestService Ended ToCreate Default Table")
  console.log()
  return true
}