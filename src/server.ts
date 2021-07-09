/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import logger from '@middlewares/logger';
import { dbConnection, server } from './config';
import connection from './config/db';

connection.then(() => {
  logger.info(`Database connected: ${dbConnection.database}`);
  logger.info(`Database syncronize: ${dbConnection.synchronize}`);
  require('./app').default.app.listen(
    server.port,
    logger.info(
      `Application is listening on port: ${server.port} - server mode: ${server.env}`
    )
  );
});
