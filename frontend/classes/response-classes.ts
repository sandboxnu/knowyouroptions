export class Redirect {
  redirect!: string;
}

export type TimeUnits = 'years' | 'months' | 'days' | 'weeks';

export type Tag = {
  id: number;
  label: string;
};

export type Benefit = {
  id: number;
  description: string;
};

export type SideEffect = {
  id: number;
  description: string;
};

export type ThingToKnow = {
  id: number;
  title: string;
  description: string;
};

export type Contraceptive = {
  id: number;
  name: string;
  usePatternLowBound: number;
  usePatternHighBound: number;
  usePatternUnits: TimeUnits;
  effectiveRate: number;
  costMin: number;
  costMax: number;
  accessibility: string;
  tags: Tag[];
  description: string;
  use: string;
  inCaseOfProblem: string;
  whenItStartsToWork: string[];
  howToStop: string;
  howToStopMethod: string;
  howToStopDurationText: string;
  howLongUntilFertility: string;
  benefits: Benefit[];
  sideEffects: SideEffect[];
  howItWorks: string;
  healthRisks: string;
  whoCantUse: string[];
  whereToAccess: string[];
  whoAdministers: string;
  costDescription: string;
  warning: string;
  thingsToKnow: ThingToKnow[];
};
