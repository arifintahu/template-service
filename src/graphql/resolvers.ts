import { 
	userFind,
	userCreate 
} from './resolvers/user.resolver';

export const resolvers = {
	Query : {
		userFind
	},
	Mutation : {
		userCreate
	}
};
