import { cL, pl } from "../services/loggerService"

const promiseTestFunction = function (arg: boolean) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (arg) return res(true)
      else rej(false)
    }, 1000)
  })
}

export default function () {
  setTimeout(() => {
    pl(promiseTestFunction, true).then((res) => cL("loggerTestService", { result: res }))
  }, 500)
  setTimeout(() => {
    pl(promiseTestFunction, false).catch((err) => cL("loggerTestService", { result: err }))
  }, 1100)
}