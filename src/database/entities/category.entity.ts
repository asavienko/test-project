import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { NewsEntity } from './news.entity';

@Entity()
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => NewsEntity, (news) => news.category)
  posts?: NewsEntity[];
}
