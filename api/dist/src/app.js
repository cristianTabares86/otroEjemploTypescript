"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./lib/config"));
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' })); //middleware
app.use(express_1.default.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((0, cors_1.default)({
    origin: config_1.default.cors,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
}));
app.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
app.get('/', (req, res) => {
    res.send('hola typescript!');
});
app.use('/api', index_1.default);
exports.default = app;
