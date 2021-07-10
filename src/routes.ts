import { Router } from 'express';

import userRoutes from './apps/Users/routes';
import healthCheckRoutes from '@apps/HealthCheck/routes';

const route = Router();

route.use('/users', userRoutes);
route.use('/healthCheck', healthCheckRoutes);

export default route;
