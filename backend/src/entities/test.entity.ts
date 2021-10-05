import { Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Test extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
