import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ThingToKnow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
