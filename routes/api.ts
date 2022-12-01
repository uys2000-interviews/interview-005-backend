import express, { Request, Response } from 'express';
import { addUserToTable, deleteUserFromTable, getUserFromTableWithId, getUsersFromTable, updateUserFromTable } from '../database/service';
import { User } from '../database/serviceClasses';
import { cL, pl } from '../services/loggerService';
const router = express.Router()


const succesResponse = (res: Response, result: unknown) => res.status(200).json({ data: result })
const errorResponse = (res: Response, err: unknown) => res.status(500).json({ error: err })

router.get('/', (req: Request, res: Response) => {
  succesResponse(res, "you should look at frontend part of this app")
});

router.get('/users', (req: Request, res: Response) => {
  pl(getUsersFromTable)
    .then(result => succesResponse(res, result))
    .catch(err => (err.code == 0) ? succesResponse(res, []) : errorResponse(res, err))
});

router.get('/users/:id', (req: Request, res: Response) => {
  pl(getUserFromTableWithId, [parseInt(req.params.id)])
    .then(result => succesResponse(res, result))
    .catch(err => errorResponse(res, err))
});

router.post('/users', (req: Request, res: Response) => {
  const user: User = req.body as User;
  pl(addUserToTable, [user])
    .then(result => succesResponse(res, result))
    .catch(err => errorResponse(res, err))
});

router.put('/users/:id', (req: Request, res: Response) => {
  const user: User = req.body as User;
  pl(updateUserFromTable, [parseInt(req.params.id), user])
    .then(result => succesResponse(res, result))
    .catch(err => errorResponse(res, err))
});

router.delete('/users/:id', (req: Request, res: Response) => {
  pl(deleteUserFromTable, [{ id: parseInt(req.params.id) }])
    .then(result => succesResponse(res, result))
    .catch(err => errorResponse(res, err))
});

router.get("/comp/users/", (req: Request, res: Response) => {
  pl(deleteUserFromTable, [{ id: parseInt(req.params.id) }])
    .then(result => succesResponse(res, result))
    .catch(err => errorResponse(res, err))
});
export default router