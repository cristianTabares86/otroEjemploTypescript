import {Response, Request, Router, NextFunction} from 'express';
import {User} from "../models/User"
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
  User.findAll()
     .then((users) => {
      res.send(users);
     })
     .catch((error) => next(error));
   });
   
   router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    console.log(user)
    User.create(user)
     .then((createdUser) => {
      res.send(createdUser);
     })
     .catch((error) => res.status(400).send(error.message));
     
   });

export default router;