import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Benefit } from './benefits.entity';
import { SideEffect } from './side-effects.entity';
import { Tag } from './tags.entity';
import { ThingToKnow } from './things-to-know.entity';

type TimeUnits = 'years' | 'months' | 'days' | 'weeks';

@Entity()
export class Contraceptive {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  usePatternLowBound: number;

  @Column()
  usePatternHighBound: number;

  @Column()
  usePatternUnits: TimeUnits;

  @Column()
  effectiveRate: number;

  @Column()
  costMin: number;

  @Column()
  costMax: number;

  @Column()
  accessibility: string;

  @OneToMany((type) => Tag, (tag) => tag.id)
  tags: Tag[];

  @Column()
  description: string;

  @Column()
  use: string;

  @Column()
  inCaseOfProblem: string;

  @Column({ type: 'text', array: true, default: [] })
  whenItStartsToWork: string[];

  @Column()
  howToStop: string;

  @Column()
  howLongUntilFertility: string;

  @OneToMany((type) => Benefit, (benefit) => benefit.id)
  benefits: Benefit[];

  @OneToMany((type) => SideEffect, (sideEffect) => sideEffect.id)
  sideEffects: SideEffect[];

  @Column()
  howItWorks: string;

  @Column()
  healthRisks: string;

  @Column()
  whoCantUse: string;

  @Column({ type: 'text', array: true, default: [] })
  whereToAccess: string[];

  @Column()
  whoAdministers: string;

  @Column()
  costDescription: string;

  @OneToMany((type) => ThingToKnow, (thingToKnow) => thingToKnow.id)
  thingsToKnow: ThingToKnow[];
}
