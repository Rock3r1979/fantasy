import teams from "../../data/teams.json";
import players from "../../data/players.json";
import groups from "../../data/groups.json";
import rankings from "../../data/rankings.json";

import type { Group, Player, Team } from "@/types";

export const allTeams = teams as Team[];
export const allPlayers = players as Player[];
export const allGroups = groups as Group[];
export const allRankings = rankings as Player[];

export const getTeam = (id: string) => allTeams.find((t) => t.id === id);
export const getPlayer = (id: string) => allPlayers.find((p) => p.id === id);
export const getPlayersByTeam = (teamId: string) =>
  allPlayers.filter((p) => p.teamId === teamId);
