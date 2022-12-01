import pgp, { queryResult } from 'pg-promise'
import { User, EUser } from './serviceClasses'

const bgURL = 'postgres://postgres:pass@0.0.0.0:5432/postgres'
const db = pgp()(bgURL)
const catchNotFoundError = (err: any) => {
  if (err.code == 0)
    return { capabilities: [] }
  else throw new Error(err)
}

export const deleteDefaultTable = function () {
  const executeText = `DROP TABLE IF EXISTS users;`
  return db.none(executeText).then(() => true).catch((err) => console.log(err))
}
export const createDefaultTable = function () {
  const executeText = `
  CREATE TABLE users (
    id serial PRIMARY KEY,
    role VARCHAR (100) NOT NULL,
    capabilities TEXT [] NOT NULL
 );`
  return db.none(executeText).then(() => true).catch((err) => console.log(err))
}

export const getUsersFromTable = function () {
  const executeText = `SELECT * FROM users;`
  return db.many(executeText)
}
export const getUserFromTableWithId = function (id: number) {
  const executeText = `SELECT * FROM users WHERE id=${id};`
  return db.many(executeText)
}
export const getUserFromTableWithRole = function (role: String) {
  const executeText = `SELECT * FROM users WHERE role='${role}';`
  return db.one(executeText)
}
export const getUserCapabilitiesFromTableWithRole = function (role: String) {
  const executeText = `SELECT capabilities FROM users WHERE role='${role}';`
  return db.one(executeText).catch(catchNotFoundError)
}
export const addUserToTable = function (user: User) {
  const executeText = `
  INSERT INTO users(role, capabilities)
  VALUES ("${user.role}", ARRAY ${JSON.stringify(user.capabilities)});`.replace(/"/g, "'")
  return db.none(executeText).then(() => true)
}

export const deleteUserFromTable = function (eUser: EUser) {
  // id or (role and capabilities) shoul be in eUser
  // this function does not just deletes user with id, it also can delete with using role and capabilities 
  // ı am not tested but it should be :)
  if (eUser.id != undefined || eUser.role != undefined && eUser.capabilities != undefined) {
    const executeText = `
    DELETE FROM users
    WHERE ${eUser.id ? "id=" + eUser.id : ""} 
          ${eUser.role ? "role=" + eUser.role : ""} 
          ${eUser.capabilities ? "capabilities=" + eUser.capabilities : ""} ;`
    return db.none(executeText).then(() => true)
  }
  else return new Promise((res, rej) => rej({ error: "unUsable" }))
}


export const updateUserFromTable = function (id: number, user: User) {
  // id or (role and capabilities) shoul be in eUser 
  if (user.role != undefined || user.capabilities != undefined) {
    const role = user.role ? `role='${user.role}'` : ""
    const capabilities = user.capabilities ? `capabilities=ARRAY${JSON.stringify(user.capabilities)}` : ""
    const executeText = `
    UPDATE users
    SET ${role}${user.role != undefined && user.capabilities != undefined ? "," : ""}
        ${capabilities}  
    WHERE id=${id}`.replace(/"/g, "'")
    return db.none(executeText).then(() => true)
  }
  else return new Promise((res, rej) => rej(false))
}