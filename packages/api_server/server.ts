import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pgPromise from 'pg-promise';

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.API_SERVER_PORT || 9001;
const pgp = pgPromise();
const db = pgp('postgres://admin:admin@db:5432/test_db');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await db.any('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('something went wrong!', error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
