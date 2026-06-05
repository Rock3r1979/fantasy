import { Team } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface TeamCardProps {
  team: Team;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">{team.flag}</span>
          <span>{team.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600">Grupo {team.group}</p>
            <p className="text-sm text-gray-600">Ranking FIFA: #{team.worldRank}</p>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-1">Probabilidad de clasificación</p>
            <Progress value={team.probability} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">{team.probability}%</p>
          </div>
          
          <div>
            <p className="text-sm font-medium">Formación: {team.formation}</p>
            <p className="text-xs text-gray-500">DT: {team.coach}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};