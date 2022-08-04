import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { CategoryEntity } from '../../entities/category.entity';

define(CategoryEntity, (faker: typeof Faker) => {
  const category = new CategoryEntity();

  category.name = faker.commerce.productMaterial();

  return category;
});
