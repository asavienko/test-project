import { Controller, Get } from '@nestjs/common';
import { NewsEntity } from '../../database/entities/news.entity';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('/')
  async getList(): Promise<NewsEntity[]> {
    return await this.newsService.getList();
  }
}
