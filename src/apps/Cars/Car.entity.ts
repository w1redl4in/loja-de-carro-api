import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Car extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  km!: string;

  @Column()
  location!: string;

  @Column()
  transmition!: string;

  @Column()
  motor!: string;

  @Column()
  price!: number;

  @Column()
  rate!: number;

  @Column()
  brand!: string;

  @Column()
  model!: string;

  @Column()
  category!: string;

  @Column()
  popular!: string;

  @Column()
  morePrice!: number;

  @Column()
  lowPrice!: number;
}


