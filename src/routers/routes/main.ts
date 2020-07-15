import { Router } from 'express';
import { userController } from '../../controllers'; 

const route = Router();

route.get('/', (req, res) => {
	res.status(200).end();
});

route.get('/user', (req, res) => {
	userController.userFindController(req, res);
});

export default route;