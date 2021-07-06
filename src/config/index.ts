import { createConnections } from 'typeorm';

import { User } from '@apps/Users/User.entity';

const connection = createConnections([
  {
    name: 'mysql',
    type: 'mysql',
    host: 'db',
    port: 3306,

    password: 'example',
    entities: [User],
    synchronize: true,
  },
]);

export default connection;
