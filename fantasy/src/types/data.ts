import playersData from '@/data/players.json';
import teamsData from '@/data/teams.json';
import groupsData from '@/data/groups.json';
import rankingsData from '@/data/rankings.json';
import { Player, Team, Group, FantasyRanking } from '@/types';

export const players: Player[] = playersData.players;
export const teams: Team[] = teamsData.teams;
export const groups: Group[] = groupsData.groups;
export const rankings: {
  globalRanking: FantasyRanking[];
  positionRanking: Record<string, FantasyRanking[]>;
} = rankingsData;

export const getPlayerById = (id: string): Player | undefined => {
  return players.find(p => p.id === id);
};

export const getTeamById = (id: string): Team | undefined => {
  return teams.find(t => t.id === id);
};

export const getPlayersByTeam = (teamId: string): Player[] => {
  return players.filter(p => p.teamId === teamId);
};

export const getPlayersByPosition = (position: Player['position']): Player[] => {
  return players.filter(p => p.position === position);
};

export const getTeamsByGroup = (groupId: string): Team[] => {
  const group = groups.find(g => g.id === groupId);
  if (!group) return [];
  return teams.filter(t => group.teams.includes(t.id));
};