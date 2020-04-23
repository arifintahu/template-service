import * as express from 'express';
import * as bodyParser from 'body-parser'; 
import * as fs from 'fs';
import * as path from 'path';
import * as compression from 'compression';
import * as cors from 'cors';
import { createServer } from 'http';
import { Server } from 'net';
// import { resolvers } from './graphql/resolvers';
// import { context } from './graphql/context';

// import { 
//   registration, 
//   login, 
//   readUser, 
//   updateUser, 
//   deleteUser 
// } from "./services/user/index";

// import { authToken } from './middleware/auth';

// //Apollo Server
// const { ApolloServer, gql } = require('apollo-server-express');
// const typeDefs = gql(fs.readFileSync( path.join(__dirname, "./graphql/schema/schema.gql"), "utf8"));
// const server = new ApolloServer({ 
//   typeDefs, 
//   resolvers,
//   context,
//   introspection: true,
//   playground: true 
// });
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse form data client
app.use('*', cors());
app.use(compression());

app.set('port', process.env.PORT);

// routing
app.get("/", (req, res) => {
  res.send("Hello")
});

//User
// app.post("/user/login", login);
// app.post("/user/register", registration);
// app.get("/user", authToken, readUsername);
// app.get("/user/:userid", authToken, readUserId);
// app.put("/user/:userid", authToken, updateUserAccount);
// app.delete("/user/:userid", authToken, deleteUserAccount);

//Create Server
const http_server = createServer(app);
// server.applyMiddleware({ app });

export function startServer(): Server {
  return http_server.listen(process.env.PORT, () => {
    console.log('Server is listening on port ', process.env.PORT);
  });
}
