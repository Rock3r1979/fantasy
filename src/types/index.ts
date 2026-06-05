export type Position = "POR" | "DEF" | "MED" | "DEL";

export interface Player {
  id: string;
  name: string;
  teamId: string;
  position: Position;
  isStarter: boolean;
  starterProbability: number;
  goalProbability: number;
  assistProbability: number;
  advanceProbability: number;
  fantasyValue: number;
  fantasyScore: number;
  rank?: number;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  group: string;
  flag: string;
  coach: string;
  confederation: string;
  fifaRanking: number;
  qualifyProbability: number;
  bestPlayerId: string;
  mostValuablePlayerId: string;
  formation: string;
}

export interface Group {
  id: string;
  teams: string[];
}
