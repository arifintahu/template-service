import * as express from 'express';
import loaders from './loaders';
import { createServer } from 'http';
import { Server } from 'net';

export async function startServer(): Promise<Server> {
	const app = express();
	await loaders(app);

	app.set('port', process.env.PORT);
	const http_server = createServer(app);

	return http_server.listen(process.env.PORT, () => {
		console.log('Server is listening on port ', process.env.PORT);
	});
}

startServer();
