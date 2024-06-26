import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import connectDB from './config/db';
import v1Routes from './routes/v1/index';
import errorHandlerMiddleware from './middleware/errorHandler.middleware';
import notFoundMiddleware from './middleware/notFound.middleware';



dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/manish", (req: Request, res: Response) => {
  return res.json({ message: "manish ok" });
});


app.use('/api/v1', v1Routes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
