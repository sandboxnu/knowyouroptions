import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;
}
