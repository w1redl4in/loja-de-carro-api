import { Request, Response } from 'express';
import HealthCheckService from './HealthCheckService';

export const healthCheck = async (req: Request, res: Response) => {
  const response = await HealthCheckService.healthCheck();
  return res.json(response);
};
