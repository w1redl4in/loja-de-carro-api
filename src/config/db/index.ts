import { createConnection } from 'typeorm';
import { dbConnection } from '../';
import { User } from '@apps/Users/User.entity';
import { Car } from '@apps/Cars/Car.entity';

const connection = createConnection({
  name: dbConnection.name,
  type: 'mysql',
  host: dbConnection.host,
  port: dbConnection.port,
  username: dbConnection.username,
  password: dbConnection.password,
  database: dbConnection.database,
  entities: [User, Car],
  synchronize: dbConnection.synchronize,
  migrations: ['src/config/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/config/migrations',
  },
});

export default connection;
