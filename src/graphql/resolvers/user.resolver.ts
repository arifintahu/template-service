import { checkAuthentication } from './utils/auth';
import { user } from '../../services';

export async function userFind(root, args, ctx) {
	const result = await user.userFind();
	return result;
}

export async function userCreate(root, { form }, ctx) {
	const result = await user.userCreate(form);
	return result;
}

// export async function userRead( root, args, ctx){
// 	const ok = checkAuthentication(ctx);
// 	if (!ok) {
// 		return;
// 	}
// 	return await User.findAll({
// 		raw : true
// 	});
// }

// export async function userUpdate(root, { id, form }, ctx) {
// 	const ok = checkAuthentication(ctx);
// 	if (!ok) {
// 		return;
// 	}
// 	const result = await updateUser(id, form);
// 	return result;
// }
