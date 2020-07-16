// import { verifyToken } from "../models/user";

export async function context({ req, connection, payload }) {
  // let token = "";
  // if (connection) {
  //   token = connection.context.authorization || "";
  // }
  // if (req) {
  //   token = req.headers.authorization || "";
  // }
  // if(payload) {
  //   token = payload.authorization || "";
  // }

  // if (!token || !token.length) {
  //   return {};
  // }
  // const user = await verifyToken(token);

  // return { user };
  return {};
}
