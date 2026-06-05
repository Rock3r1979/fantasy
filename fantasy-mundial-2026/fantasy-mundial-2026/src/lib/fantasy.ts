import { allPlayers, allTeams } from "@/lib/data";
import type { Formation, Player, Position } from "@/types";
const FORMATIONS: Record<Formation, Record<Position, number>> = {
  "4-3-3": { POR: 1, DEF: 4, MED: 3, DEL: 3 },
  "4-4-2": { POR: 1, DEF: 4, MED: 4, DEL: 2 },
  "3-5-2": { POR: 1, DEF: 3, MED: 5, DEL: 2 },
  "4-2-3-1": { POR: 1, DEF: 4, MED: 5, DEL: 1 },
  "3-4-3": { POR: 1, DEF: 3, MED: 4, DEL: 3 }
};
export function getBestXI(formation: Formation = "4-3-3") {
  const rules = FORMATIONS[formation];
  const selected: Player[] = [];
  (Object.keys(rules) as Position[]).forEach((position) => {
    const top = allPlayers.filter((player) => player.position === position).sort((a, b) => b.fantasyScore - a.fantasyScore).slice(0, rules[position]);
    selected.push(...top);
  });
  return selected.sort((a, b) => b.fantasyScore - a.fantasyScore);
}
export function getRecommendedSquad(formation: Formation, budget: number) {
  const rules = FORMATIONS[formation];
  const picked: Player[] = [];
  let total = 0;
  (Object.keys(rules) as Position[]).forEach((position) => {
    const candidates = allPlayers.filter((player) => player.position === position).sort((a, b) => (b.fantasyScore / b.fantasyValue) - (a.fantasyScore / a.fantasyValue));
    for (const candidate of candidates) {
      if (picked.filter((p) => p.position === position).length >= rules[position]) break;
      if (picked.filter((p) => p.teamId === candidate.teamId).length >= 3) continue;
      if (total + candidate.fantasyValue > budget + 0.01) continue;
      if (!picked.some((p) => p.id === candidate.id)) { picked.push(candidate); total += candidate.fantasyValue; }
    }
  });
  return { players: picked, totalCost: Number(total.toFixed(1)), totalScore: Number(picked.reduce((sum, player) => sum + player.fantasyScore, 0).toFixed(1)) };
}
export function simulateGroups() {
  return allTeams.map((team) => ({ ...team, adjustedFantasyBoost: Number((team.qualifyProbability * 0.22 + team.qfProbability * 0.12).toFixed(1)) })).sort((a, b) => b.qualifyProbability - a.qualifyProbability);
}
