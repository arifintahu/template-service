import { client } from '../../loaders/redis';

function redisSet(name, data) {
	return new Promise((resolve, reject) => {
		client.set(name, JSON.stringify(data), (err, reply) => {
			if(err) {
				reject(false);
			} else {
				resolve(reply);
			}
		})
	})
}

function redisGet(name) {
	return new Promise((resolve, reject) => {
		client.get(name, (err, reply) => {
			if(err) {
				reject(false);
			} else {
				if(reply) {
					resolve(JSON.parse(reply));
				} else {
					resolve(false);
				}
			}
		})
	})
}

export {
	redisSet,
	redisGet
}
