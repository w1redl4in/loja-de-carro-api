import { Router } from 'express';

import userRoutes from './apps/Users/routes';
import authRoutes from './apps/Auth/routes';
import healthCheckRoutes from '@apps/HealthCheck/routes';
import carsRoute from '@apps/Cars/routes';

const route = Router();

route.use('/users', userRoutes);
route.use('/auth', authRoutes);
route.use('/healthCheck', healthCheckRoutes);
route.use('/cars', carsRoute);

export default route;
