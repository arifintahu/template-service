import { Sequelize, Model, DataTypes } from 'sequelize';

const db = new Sequelize({
  database: process.env["DB_DATABASE"],
  username: process.env["DB_USERNAME"],
  password: process.env["DB_PASSWORD"],
  host: process.env["DB_HOST"],
  port: parseInt(process.env["DB_PORT"], 10),
  dialect: "postgres",
  logging: false,
  timezone: "Asia/Jakarta"
});

export class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  },
  { modelName: 'user', sequelize: db }
);

export function syncDB(): Promise<Sequelize> {
  return db.sync();
}
