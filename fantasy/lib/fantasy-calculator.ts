import { Player } from '@/types';

export const calculateFantasyScore = (player: Player): number => {
  const baseScore = player.fantasyPoints;
  
  // Bonus por probabilidades
  const goalBonus = player.goalProbability * 15;
  const assistBonus = player.assistProbability * 10;
  const starterBonus = player.estimatedStarter ? 5 : 0;
  const roundBonus = (player.roundAdvanceProbability / 100) * 20;
  
  return baseScore + goalBonus + assistBonus + starterBonus + roundBonus;
};

export const getTopPlayersByPosition = (
  players: Player[],
  position: Player['position'],
  limit: number = 10
): Player[] => {
  return players
    .filter(p => p.position === position)
    .sort((a, b) => calculateFantasyScore(b) - calculateFantasyScore(a))
    .slice(0, limit);
};

export const getValueForMoney = (player: Player): number => {
  return calculateFantasyScore(player) / player.fantasyValue;
};