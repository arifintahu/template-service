import redis from 'redis'; 

export const client = redis.createClient();

export default function loadRedis() {
	return new Promise((resolve, reject) => {
		client.on('connect', function() {
			console.log('Redis is connected');
			resolve();
		});
		client.on('error', function(error) {
			console.log(error);
			reject();
		});
	});
}
