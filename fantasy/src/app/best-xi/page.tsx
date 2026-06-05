'use client';

import { useState } from 'react';
import { players } from '@/lib/data';
import { PlayerCard } from '@/components/PlayerCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { buildBestTeam } from '@/lib/team-builder';
import { FormationType, TeamFormation } from '@/types';

export default function BestXIPage() {
  const [formation, setFormation] = useState<FormationType>('4-3-3');
  const [bestTeam, setBestTeam] = useState<TeamFormation | null>(null);
  
  const generateBestXI = () => {
    const team = buildBestTeam(players, formation);
    setBestTeam(team);
  };
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mejor XI Automático</h1>
      
      <div className="flex gap-4 mb-8 items-end">
        <div className="flex-1 max-w-xs">
          <label className="block text-sm font-medium mb-2">Formación</label>
          <Select value={formation} onValueChange={(v) => setFormation(v as FormationType)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4-4-2">4-4-2</SelectItem>
              <SelectItem value="4-3-3">4-3-3</SelectItem>
              <SelectItem value="3-5-2">3-5-2</SelectItem>
              <SelectItem value="5-3-2">5-3-2</SelectItem>
              <SelectItem value="4-5-1">4-5-1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button onClick={generateBestXI}>
          Generar Mejor XI
        </Button>
      </div>
      
      {bestTeam && (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Portero</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestTeam.GK.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Defensas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestTeam.DEF.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Mediocampistas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestTeam.MID.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Delanteros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestTeam.FW.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}