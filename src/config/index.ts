import { config } from 'dotenv';

const envfile = `.env.${process.env.NODE_ENV}`;
const envdir = process.cwd();

config({ path: `${envdir}/${envfile}` });

export const server = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
};

export const dbConnection = {
  name: String(process.env.MYSQL_NAME),
  type: String(process.env.MYSQL_TYPE),
  host: String(process.env.MYSQL_HOST),
  port: Number(process.env.MYSQL_PORT),
  username: String(process.env.MYSQL_USERNAME),
  password: String(process.env.MYSQL_PASSWORD),
  database: String(process.env.MYSQL_DATABASE),
  synchronize: server.env === 'dev',
};
