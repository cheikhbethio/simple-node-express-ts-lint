import express, { Request, Response } from 'express';

export const router = express.Router();
/* GET users listing. */
router.get('/', (req: Request, res: Response) =>
	res.send('respond with a resource'),
);
