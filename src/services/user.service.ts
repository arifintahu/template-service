import { User } from '../models';

export default {
	userFind: async () => {
		const result = await User.findAll();
		return result;
	},
	userCreate: async (data) => {
		const result = await User.create(data);
		return result;
	}
}
