import { ConnectionOptions } from 'typeorm';
import { Story } from '../entity/Story';

const opts: ConnectionOptions = {
  name: 'default',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'vovansuper',
  password: 'ova354',
  database: 'UsersDb',
  synchronize: true,
  logging: 'all',
  logger: 'advanced-console',
  entities: [
    Story
  ]
};

export { opts };