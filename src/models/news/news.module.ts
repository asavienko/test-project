import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsEntity } from '../../database/entities/news.entity';
import { NewsService } from './news.service';

@Module({
  imports: [NewsEntity],
  providers: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
