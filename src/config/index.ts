import { createConnections } from 'typeorm';

import { User } from '@apps/Users/User.entity';

const connection = createConnections([
  {
    name: 'mysql',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'example',
    database: 'carshop',
    entities: [User],
    synchronize: true,
  },
]);

export default connection;
