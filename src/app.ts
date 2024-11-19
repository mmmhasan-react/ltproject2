import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

//parser
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send('Hello World!');
});

export default app;
