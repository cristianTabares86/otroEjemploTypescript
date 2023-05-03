"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
require("express-async-errors");
// import router from './index';
const router = (0, express_1.Router)();
// router.get('/', (req: Request, res: Response) => {
//  res.send('soy la ruta get!');
// });
// router.post('/', (req: Request, res: Response) => {
//  res.send('soy la ruta post!');
// });
router.get('/', (req, res, next) => {
    User_1.User.findAll()
        .then((users) => {
        res.send(users);
    })
        .catch((error) => next(error));
});
router.post('/', (req, res, next) => {
    const user = req.body;
    console.log(user);
    User_1.User.create(user)
        .then((createdUser) => {
        res.send(createdUser);
    })
        .catch((error) => res.status(400).send(error.message));
});
exports.default = router;
