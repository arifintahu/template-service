import { Sequelize } from 'sequelize';

export const db = new Sequelize({
  database: process.env["DB_DATABASE"] || 'lms',
  username: process.env["DB_USERNAME"] || 'postgres',
  password: process.env["DB_PASSWORD"] || 'postgres',
  host: process.env["DB_HOST"] || 'localhost',
  port: parseInt(process.env["DB_PORT"], 10) || 5432,
  dialect: 'postgres',
  logging: false,
  timezone: 'Asia/Jakarta'
});

export default function loadSequelize(): Promise<Sequelize> {
  return db.sync();
}
