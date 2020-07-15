import { Router } from 'express';
import { main } from './routes';

const app = Router();
app.use('/', main);

export default app;