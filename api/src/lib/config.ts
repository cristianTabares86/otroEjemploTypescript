import * as dotenv from 'dotenv';

dotenv.config();
console.log("este es log de env")
console.log(dotenv.config())

const config = {
 dbUser: process.env.DB_USER || 'postgres',
 dbPassword: process.env.DB_PASSWOR || 'noesmentira1986', //! No esta ejecutando process
 dbHost: process.env.DB_HOST || 'localhost',
 dbName: process.env.DB_NAME || 'workshop',
 dbPort: process.env.DB_PORT || '5432',
 dev: process.env.NODE_ENV !== 'production',
 port: process.env.API_PORT || '3001',
 host: process.env.API_host || 'localhost',
 cors: process.env.CORS || 'localhost:3000',
 deployUrl: process.env.DB_DEPLOY || 'postgresql://postgres:ixMRH6rxsTZbkLduz40a@containers-us-west-198.railway.app:6166/railway'
};

const test = require('dotenv').config()
// console.log(test)
// const quetrae: string = process.env.DB_PASSWOR;
// console.log(quetrae)

export default config;