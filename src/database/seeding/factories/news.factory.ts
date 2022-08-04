import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { NewsEntity } from '../../entities/news.entity';
import { LIKES_MAX_QUANTITY } from '../../../common/settings';

define(NewsEntity, (faker: typeof Faker) => {
  const news = new NewsEntity();
  news.title = faker.commerce.productName();
  news.image = faker.internet.avatar();
  news.date = faker.date.past();
  news.shortDescription = faker.lorem.paragraph(4);

  news.likeQuantity = faker.random.number(LIKES_MAX_QUANTITY, 0);
  news.fullDescription = faker.lorem.paragraph(150);

  return news;
});
