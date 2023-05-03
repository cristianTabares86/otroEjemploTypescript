import {Router} from 'express';
import userRoutes1 from './user';
import userRoutes2 from './team';
const router = Router();

router.use('/user', userRoutes1);
router.use('/team', userRoutes2);

export default router;