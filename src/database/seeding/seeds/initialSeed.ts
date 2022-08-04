// @/src/db/seeding/seeds/initialSeed.ts
import { Factory, Seeder } from 'typeorm-seeding';

import { NewsEntity } from '../../entities/news.entity';
import { CategoryEntity } from '../../entities/category.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const categories = await factory(CategoryEntity)().createMany(20);

    await factory(NewsEntity)()
      .map(async (news) => {
        news.category =
          categories[Math.floor(Math.random() * categories.length)];
        return news;
      })
      .createMany(500);
  }
}
