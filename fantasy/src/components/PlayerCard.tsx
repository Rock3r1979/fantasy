import { Player, getTeamById } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Target, Users, DollarSign } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  showStats?: boolean;
}

export const PlayerCard = ({ player, showStats = true }: PlayerCardProps) => {
  const team = getTeamById(player.teamId);
  
  const positionColors = {
    GK: 'bg-blue-100 text-blue-800',
    DEF: 'bg-green-100 text-green-800',
    MID: 'bg-yellow-100 text-yellow-800',
    FW: 'bg-red-100 text-red-800',
  };
  
  return (
    <Card className="hover:shadow-lg transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{player.name}</CardTitle>
            <p className="text-sm text-gray-600">{team?.name} {team?.flag}</p>
          </div>
          <Badge className={positionColors[player.position]}>
            {player.position}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {player.estimatedStarter && (
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Titular seguro</span>
            </div>
          )}
          
          {showStats && (
            <>
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-1">
                  <Target className="w-3 h-3" /> Gol: {(player.goalProbability * 100).toFixed(0)}%
                </span>
                <span>Asistencia: {(player.assistProbability * 100).toFixed(0)}%</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> Avance: {player.roundAdvanceProbability}%
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3" /> Valor: {player.fantasyValue}
                </span>
              </div>
              
              <div className="mt-2 pt-2 border-t">
                <p className="text-sm font-semibold">
                  Puntos Fantasy: {player.fantasyPoints}
                </p>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};