import { Router } from 'express';

import userRoutes from './apps/Users/routes';

const route = Router();

route.use('/users', userRoutes);

export default route;
