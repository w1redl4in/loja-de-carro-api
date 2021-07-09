import { Router } from 'express';

import * as controller from './HealthCheckController';

const route = Router();

route.get('/', controller.healthCheck);

export default route;
