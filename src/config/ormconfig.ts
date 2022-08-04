import { NewsEntity } from '../database/entities/news.entity';
import { CategoryEntity } from '../database/entities/category.entity';

import dotenv from 'dotenv';

dotenv.config();

export default {
  type: 'postgres',

  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [CategoryEntity, NewsEntity],
  synchronize: true,
  logging: false,
  seeds: ['src/database/seeding/seeds/**/*{.ts,.js}'],
  factories: ['src/database/seeding/factories/**/*{.ts,.js}'],
};
