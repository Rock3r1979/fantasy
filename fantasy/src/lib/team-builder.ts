import { Player, FormationType, TeamFormation } from '@/types';
import { calculateFantasyScore, getValueForMoney } from './fantasy-calculator';

const FORMATION_MAP: Record<FormationType, { GK: number; DEF: number; MID: number; FW: number }> = {
  '4-4-2': { GK: 1, DEF: 4, MID: 4, FW: 2 },
  '4-3-3': { GK: 1, DEF: 4, MID: 3, FW: 3 },
  '3-5-2': { GK: 1, DEF: 3, MID: 5, FW: 2 },
  '5-3-2': { GK: 1, DEF: 5, MID: 3, FW: 2 },
  '4-5-1': { GK: 1, DEF: 4, MID: 5, FW: 1 },
};

export const buildBestTeam = (
  allPlayers: Player[],
  formation: FormationType,
  budget: number = 100
): TeamFormation | null => {
  const requirements = FORMATION_MAP[formation];
  const team: TeamFormation = { GK: [], DEF: [], MID: [], FW: [] };
  let totalCost = 0;
  
  for (const position of ['GK', 'DEF', 'MID', 'FW'] as const) {
    const needed = requirements[position];
    const available = allPlayers
      .filter(p => p.position === position && !isPlayerUsed(p, team))
      .sort((a, b) => getValueForMoney(b) - getValueForMoney(a));
    
    for (let i = 0; i < needed && i < available.length; i++) {
      if (totalCost + available[i].fantasyValue <= budget) {
        team[position].push(available[i]);
        totalCost += available[i].fantasyValue;
      }
    }
  }
  
  // Verificar si completamos el equipo
  const totalPlayers = team.GK.length + team.DEF.length + team.MID.length + team.FW.length;
  const requiredTotal = requirements.GK + requirements.DEF + requirements.MID + requirements.FW;
  
  return totalPlayers === requiredTotal ? team : null;
};

const isPlayerUsed = (player: Player, team: TeamFormation): boolean => {
  return [...team.GK, ...team.DEF, ...team.MID, ...team.FW].some(p => p.id === player.id);
};

export const getRecommendedPlayers = (
  players: Player[],
  budget: number,
  formation: FormationType
): Player[] => {
  const sortedByValue = [...players].sort((a, b) => getValueForMoney(b) - getValueForMoney(a));
  const recommended: Player[] = [];
  let currentBudget = budget;
  
  for (const player of sortedByValue) {
    if (currentBudget >= player.fantasyValue) {
      recommended.push(player);
      currentBudget -= player.fantasyValue;
    }
    if (recommended.length >= 15) break;
  }
  
  return recommended;
};