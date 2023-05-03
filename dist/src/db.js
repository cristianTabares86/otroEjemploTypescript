"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("./lib/config"));
// config;
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    database: config_1.default.dbName,
    password: config_1.default.dbPassword,
    username: config_1.default.dbUser,
    storage: ':memory:',
    models: [__dirname + '/models']
});
console.log(config_1.default.dbPassword);
