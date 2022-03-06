import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class SideEffect extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
