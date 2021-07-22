import { Router } from 'express';
import 'express-async-errors';
import { validateAuth } from './validator';
import * as controller from './AuthController';

const router = Router();

router.post('/', validateAuth, controller.auth);
router.get('/verifyToken', controller.verifyToken);

export default router;
