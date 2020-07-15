import bodyParser from 'body-parser'; 
import compression from 'compression';
import cors from 'cors';
import routers from '../routers';

export default function loadExpress(app) {
	return new Promise((resolve, reject) => {
		try {
			app.use(bodyParser.urlencoded({ extended: true }));
			app.use(bodyParser.json());
			app.use('*', cors());
			app.use(compression());
			app.use('/api', routers);
			resolve();
		} catch (e) {
			reject(e);
			console.log(e);
		}
	});
}
