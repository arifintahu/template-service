import { 
	userFind, 
} from './resolvers/user.resolver';

export const resolvers = {
	Query : {
		userFind
	}
};

// export const resolvers = {
// 	Query : {
// 		userRead : userRead,
// 		userLogin : userLogin,
// 		userCheck : userCheck
// 	},
// 	Mutation : {
// 		userRegister : userRegister,
// 		userUpdate : userUpdate,
// 		userDelete : userDelete
// 	}
// };
