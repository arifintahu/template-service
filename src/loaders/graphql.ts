import * as fs from 'fs';
import * as path from 'path';
import { ApolloServer, gql } from 'apollo-server-express';

import { resolvers } from '../graphql/resolvers';
import { context } from '../graphql/context';

const typeDefs = gql(fs.readFileSync( path.join(__dirname, "../graphql/schemas/schema.gql"), "utf8"));

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context,
  introspection: true,
  playground: true 
});

export default function loadGraphql(app) {
	return new Promise((resolve, reject) => {
		try {
			server.applyMiddleware({ app });
			resolve();
		} catch (e) {
			reject(e);
			console.log(e);
		}
	});
}
