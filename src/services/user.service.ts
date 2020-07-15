import { User } from '../models';

export default {
	userFind: async () => {
		const result = await User.findAll();
		return result;
	}
}
