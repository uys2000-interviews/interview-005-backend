import { userObject } from "../database/serviceClasses";
import { userHasCapability } from "../services/controlUserService";
import { pl } from "../services/loggerService";

export default async function () {

  let user = userObject
  user.role.name = "Marketing"
  
  console.log(`
Testing userHasCapability with Marketing Role
Marketing Role Capabilities : {EditData, ManageProducts}
`)
  console.log("First Run userHasCapability Function for Marketing With EditData Capability")
  console.log("Result :", await pl(userHasCapability, [user, "EditData"]))
  console.log("First Run userHasCapability Function for Marketing With ManageBusinessUnits Capability")
  console.log("Result :", await pl(userHasCapability, [user, "ManageBusinessUnits"]))
  console.log()
  return true
}