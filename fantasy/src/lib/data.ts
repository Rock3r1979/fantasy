// Este es un archivo temporal con datos de ejemplo
// Reemplázalo con tus datos reales cuando los tengas

export const players = [
  {
    id: "messi",
    name: "Lionel Messi",
    teamId: "arg",
    position: "FW",
    estimatedStarter: true,
    goalProbability: 0.65,
    assistProbability: 0.55,
    roundAdvanceProbability: 85,
    fantasyValue: 12.5,
    fantasyPoints: 285,
  }
];

export const teams = [
  {
    id: "arg",
    name: "Argentina",
    group: "A",
    flag: "🇦🇷",
    probability: 85,
    formation: "4-3-3",
    coach: "Lionel Scaloni",
    worldRank: 1,
    startingXI: [],
    importantSubs: []
  }
];

export const groups = [
  {
    id: "A",
    teams: ["arg"],
    favorites: ["arg"]
  }
];

export const getTeamById = (id: string) => teams.find(t => t.id === id);
export const getPlayerById = (id: string) => players.find(p => p.id === id);