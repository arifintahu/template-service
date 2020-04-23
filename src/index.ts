import { startServer } from './server';
// import { syncDB } from './schemas/orm';
import * as path from 'path';
import * as dotenv from 'dotenv';

async function startApp() {
	await loadEnv();
	// await syncDB();
	startServer();
}

function loadEnv() {
	return new Promise((resolve, reject) => {
		try {
			const PATH_CONFIG = path.join(__dirname,`../config/.env.dev`);
			console.log(PATH_CONFIG);
			dotenv.config({
				path: PATH_CONFIG
			});
			resolve();
		} catch (e) {
			reject(e);
			console.log(e);
		}
	});
}

startApp();
