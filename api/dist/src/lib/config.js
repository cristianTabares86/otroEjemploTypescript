"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
console.log("este es log de env");
console.log(dotenv.config());
const config = {
    dbUser: process.env.DB_USER || 'postgres',
    dbPassword: process.env.DB_PASSWOR || 'noesmentira1986',
    dbHost: process.env.DB_HOST || 'localhost',
    dbName: process.env.DB_NAME || 'workshop',
    dbPort: process.env.DB_PORT || '5432',
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.API_PORT || '3001',
    host: process.env.API_host || 'localhost',
    cors: process.env.CORS || 'localhost:3000',
    deployUrl: process.env.DB_DEPLOY || 'postgresql://postgres:ixMRH6rxsTZbkLduz40a@containers-us-west-198.railway.app:6166/railway'
};
const test = require('dotenv').config();
// console.log(test)
// const quetrae: string = process.env.DB_PASSWOR;
// console.log(quetrae)
exports.default = config;
