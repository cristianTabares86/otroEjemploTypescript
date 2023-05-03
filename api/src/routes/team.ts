import {Response, Request, Router, NextFunction} from 'express';
import {Team} from "../models/Team"
import 'express-async-errors';
// import router from './index';

const router = Router()

// router.get('/', (req: Request, res: Response) => {
//  res.send('soy la ruta get!');
// });

// router.post('/', (req: Request, res: Response) => {
//  res.send('soy la ruta post!');
// });

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  Team.findAll()
     .then((teams) => {
      res.send(teams);
     })
     .catch((error) => next(error));
   });
   
   router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const team = req.body;
    console.log("estoy en el post de teams routes")
    Team.create(team)
     .then((createdTeam) => {
      res.send(createdTeam);
     })
     .catch((error) => next(error));
   });

export default router;