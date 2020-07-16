import { User } from '../models';
import { redisSet, redisGet } from './helper/redis.helper';

export default {
	userFind: async () => {
		const reply = await redisGet('userFind');
		if(reply) {
			return reply;
		} else {
			const result = await User.findAll();
			const store = await redisSet('userFind', result);
			console.log('Redis : ', store);
			return result;
		}
	},
	userCreate: async (data) => {
		const result = await User.create(data);
		return result;
	}
}
