import Models from '../models';

const { User } = Models;

export default {
	userFind: async () => {
		const result = await User.findAll();
		return result;
	}
}
