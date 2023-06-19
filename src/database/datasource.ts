import { User } from '../entities/user-entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  url: 'mysql://root:123456@localhost:3306/test_nestjs',
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: ['./src/database/migrations/*.ts'],
  subscribers: [],
  // namingStrategy: new CustomNamingStrategy(),
});
