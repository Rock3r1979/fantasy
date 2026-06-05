import { groups, teams } from '@/lib/data';
import { TeamCard } from '@/components/TeamCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Fantasy Mundial 2026
      </h1>
      
      <Tabs defaultValue={groups[0]?.id || 'A'} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          {groups.map(group => (
            <TabsTrigger key={group.id} value={group.id}>
              Grupo {group.id}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {groups.map(group => {
          const groupTeams = teams.filter(t => group.teams.includes(t.id));
          return (
            <TabsContent key={group.id} value={group.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {groupTeams.map(team => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </main>
  );
}