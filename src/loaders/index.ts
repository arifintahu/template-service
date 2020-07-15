import loadEnv from './config';
import loadExpress from './express';
import loadSequelize from './sequelize';
import loadGraphql from './graphql';


export default function loaders(app) {
	return new Promise(async (resolve, reject) => {
		try {
			await loadEnv();
			await loadExpress(app);
			await loadGraphql(app);
			await loadSequelize();
			resolve();
		} catch (e) {
			reject(e);
			console.log(e);
		}
	});
}