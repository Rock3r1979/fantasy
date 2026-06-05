export type Position = "POR" | "DEF" | "MED" | "DEL";
export type Formation = "4-3-3" | "4-4-2" | "3-5-2" | "4-2-3-1" | "3-4-3";
export interface Player { id: string; name: string; teamId: string; position: Position; club: string; age: number; isStarter: boolean; starterProbability: number; goalProbability: number; assistProbability: number; advanceProbability: number; fantasyValue: number; fantasyScore: number; rating: number; }
export interface TeamLineup { formation: Formation; starters: string[]; bench: string[]; }
export interface Team { id: string; name: string; shortName: string; flag: string; groupId: string; fifaRanking: number; qualifyProbability: number; qfProbability: number; sfProbability: number; finalProbability: number; winProbability: number; color: string; strength: number; lineup: TeamLineup; }
export interface Group { id: string; name: string; teams: string[]; }
export interface RankingEntry { playerId: string; rank: number; fantasyScore: number; fantasyValue: number; }
