import express, {Application, Request, Response, NextFunction} from 'express';
import config from './lib/config';
import cookieParser = require('cookie-parser');
import morgan = require('morgan');
import cors from 'cors'
import routes from './routes/index';

interface error {
    status: number;
    message: string;
   }

const app: Application = express();
app.use(express.urlencoded({extended: true, limit: '50mb'})); //middleware
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
 cors({
  origin: config.cors,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
 })
);

app.use((err: error, req: Request, res: Response, next: NextFunction) => {
 // eslint-disable-line no-unused-vars
 const status = err.status || 500;
 const message = err.message || err;
 console.error(err);
 res.status(status).send(message);
});

app.get('/', (req: Request, res: Response) => {
    res.send('hola typescript!');
   });

app.use('/api', routes);

export default app;