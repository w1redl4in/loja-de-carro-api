import { Router } from 'express';
import 'express-async-errors';
import { validateAuth } from './validator';
import * as controller from './AuthController.ts';

const router = Router();

router.post('/', validateAuth, controller.auth);

export default router;
