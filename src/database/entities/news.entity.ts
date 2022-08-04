import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity()
export class NewsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  image!: string;

  @Column()
  title!: string;

  @Column('date')
  date!: string;

  @Column()
  shortDescription!: string;

  @Column('bigint')
  likeQuantity!: number;

  @Column()
  fullDescription!: string;

  @ManyToOne(() => CategoryEntity, (category) => category.name)
  category!: CategoryEntity;
}
