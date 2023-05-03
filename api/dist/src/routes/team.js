"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Team_1 = require("../models/Team");
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
    Team_1.Team.findAll()
        .then((teams) => {
        res.send(teams);
    })
        .catch((error) => next(error));
});
router.post('/', (req, res, next) => {
    const team = req.body;
    console.log("estoy en el post de teams routes");
    Team_1.Team.create(team)
        .then((createdTeam) => {
        res.send(createdTeam);
    })
        .catch((error) => next(error));
});
exports.default = router;
