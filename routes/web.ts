import express, { Request, Response } from 'express';
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Web Server');
});

export default router