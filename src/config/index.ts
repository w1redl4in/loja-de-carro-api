import { createConnection } from 'typeorm';

import { User } from '@apps/Users/User.entity';

const connection = createConnection({
  name: 'mysql',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'example',
  database: 'carshop',
  entities: [User],
  synchronize: true,
  migrations: ['src/config/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/config/migrations',
  },
});

export default connection;
