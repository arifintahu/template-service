import { Router } from 'express';
import controllers from '../../controllers'; 

const route = Router();
const { userController } = controllers;

route.get('/', (req, res) => {
	res.status(200).end();
});

route.get('/user', (req, res) => {
	userController.userFindController(req, res);
});

export default route;