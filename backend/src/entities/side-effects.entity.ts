import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SideEffect {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
