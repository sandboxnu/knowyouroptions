import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Benefit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
