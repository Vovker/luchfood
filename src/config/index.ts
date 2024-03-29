import {config} from "dotenv";

config({path: `.env.${process.env.NODE_ENV || 'development'}`});

export const {
  NODE_ENV,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} = process.env;
