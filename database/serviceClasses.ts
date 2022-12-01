import { pl } from "../services/loggerService"
import { getUserCapabilitiesFromTableWithRole } from "./service"

export class User {
  role!: string
  capabilities!: string[]
}
//eUser = exists user
export class EUser {
  id?: number
  role?: string
  capabilities?: string[]
}
export class UserObject {
  role!: {
    name: string
    getCapabilities: () => Promise<{ capabilities: String[] }>
  }
}
export const userObject: UserObject = {
  role: {
    name: "",
    getCapabilities: function () {
      return pl(getUserCapabilitiesFromTableWithRole, [this.name]) as Promise<{ capabilities: String[] }>
    }
  }
}