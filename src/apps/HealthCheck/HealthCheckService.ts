import { dbConnection } from '@config/index';
import { CustomError } from 'express-handler-errors';
import { getConnection } from 'typeorm';

class HealthCheckService {
  async healthCheck() {
    try {
      const databaseConnection = getConnection(dbConnection.name);

      if (!databaseConnection) {
        throw new CustomError({
          code: 'NO_CONNECTION',
          message: 'Sem conexão com o banco',
          status: 500,
        });
      }

      return {
        healthCheck: {
          databaseConnection: 'OK',
        },
      };
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw new CustomError({
        code: 'GENERIC_ERROR',
        message: 'Erro genérico',
        status: 500,
      });
    }
  }
}

export default new HealthCheckService();
