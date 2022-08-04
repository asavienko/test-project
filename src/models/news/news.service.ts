import { Injectable } from '@nestjs/common';
import { NewsEntity } from '../../database/entities/news.entity';

@Injectable()
export class NewsService {
  public getList() {
    return NewsEntity.find({
      relations: {
        category: true,
      },
    });
  }
}
