import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

//parser
app.use(cors());
app.use(express.json());

const getAcontroller = (req: Request, res: Response) => {
  const a = 10;
  res.send('Hello World!');
};

app.get('/', getAcontroller);

export default app;
