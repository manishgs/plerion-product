import { config } from 'dotenv';
config();

export const APP_ENV = process.env.APP_ENV || 'dev';
export const AWS_REGION = process.env.AWS_REGION;
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
