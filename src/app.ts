import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import videoRoute from './routes/videos.routes';

const app = express();

app.set('port', config.PORT);

//Middlewares
app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/video', videoRoute);

export default app;