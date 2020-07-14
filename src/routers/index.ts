import { Router } from 'express';
import routes from './routes';

const app = Router();
app.use('/', routes.main);

export default app;