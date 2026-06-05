export interface Team {
  id: string;
  name: string;
  group: string;
  flag: string;
  probability: number;
  formation: string;
  coach: string;
  worldRank: number;
  startingXI: string[];
  importantSubs: string[];
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  position: 'GK' | 'DEF' | 'MID' | 'FW';
  age: number;
  number: number;
  estimatedStarter: boolean;
  goalProbability: number;
  assistProbability: number;
  roundAdvanceProbability: number;
  fantasyValue: number;
  fantasyPoints: number;
  stats: {
    goals: number;
    assists: number;
    apps: number;
  };
}

export interface Group {
  id: string;
  teams: string[];
  favorites: string[];
}

export interface FantasyRanking {
  playerId: string;
  rank: number;
  fantasyPoints: number;
}

export interface TeamFormation {
  GK: Player[];
  DEF: Player[];
  MID: Player[];
  FW: Player[];
}

export type FormationType = '4-4-2' | '4-3-3' | '3-5-2' | '5-3-2' | '4-5-1';