import express, { Request, Response } from 'express';

export const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response) =>
	res.send('welcom to simple node js project'),
);
