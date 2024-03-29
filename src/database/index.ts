import {join} from "path";
import {DataSourceOptions} from "typeorm";
import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER} from "@config";

export const dbConnection: DataSourceOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../**/*.migration{.ts,.js}')],
  subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')]
};
