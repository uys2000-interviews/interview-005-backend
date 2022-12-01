import { UserObject } from "../database/serviceClasses";

export const userHasCapability = async function (user: UserObject, capabilitie: String) {
  const { capabilities } = await user.role.getCapabilities()
  return capabilities.includes(capabilitie)
}