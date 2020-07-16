import redis from 'redis'; 

export const client = redis.createClient({
	host: process.env["REDIS_HOST"] || '127.0.0.1',
	port: parseInt(process.env["REDIS_PORT"], 10) || 6379,
});

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
