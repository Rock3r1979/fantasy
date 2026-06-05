'use client';

import { useState } from 'react';
import { players, teams } from '@/lib/data';
import { PlayerCard } from '@/components/PlayerCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { calculateFantasyScore } from '@/lib/fantasy-calculator';

export default function RankingPage() {
  const [position, setPosition] = useState<string>('all');
  const [teamFilter, setTeamFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  
  const filteredPlayers = players
    .filter(p => position === 'all' || p.position === position)
    .filter(p => teamFilter === 'all' || p.teamId === teamFilter)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => calculateFantasyScore(b) - calculateFantasyScore(a));
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ranking Fantasy</h1>
      
      <div className="flex gap-4 mb-8 flex-wrap">
        <Input
          placeholder="Buscar jugador..."
          className="max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <Select value={position} onValueChange={setPosition}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Posición" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="GK">GK</SelectItem>
            <SelectItem value="DEF">DEF</SelectItem>
            <SelectItem value="MID">MID</SelectItem>
            <SelectItem value="FW">FW</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={teamFilter} onValueChange={setTeamFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Selección" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {teams.map(team => (
              <SelectItem key={team.id} value={team.id}>
                {team.flag} {team.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPlayers.map((player, index) => (
          <div key={player.id} className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold z-10">
              {index + 1}
            </div>
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </main>
  );
}