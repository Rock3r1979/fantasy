import { notFound } from "next/navigation";
import { Layout } from "@/components/layout";
import { allTeams, getPlayer, getPlayersByTeam, getTeam } from "@/lib/data";
import { money, pct } from "@/lib/utils";

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const team = getTeam(id);

  if (!team) return notFound();

  const players = getPlayersByTeam(id).sort(
    (a, b) => b.fantasyScore - a.fantasyScore
  );

  const best = getPlayer(team.bestPlayerId);
  const mv = getPlayer(team.mostValuablePlayerId);

  return (
    <Layout>
      <section className="wrap py-12">
        <div className="card p-8">
          <h1 className="text-4xl font-black tracking-tight">{team.name}</h1>
          <p className="mt-3 text-muted">
            Grupo {team.group} · {team.coach} · {pct(team.qualifyProbability)}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#fbf3ed] p-5">
              <p className="text-sm text-muted">Mejor fantasy</p>
              <p className="mt-1 text-xl font-bold text-accent">{best?.name}</p>
            </div>

            <div className="rounded-3xl bg-[#fbf3ed] p-5">
              <p className="text-sm text-muted">Más valorado</p>
              <p className="mt-1 text-xl font-bold">{mv?.name}</p>
              <p className="text-sm">{money(mv?.fantasyValue ?? 0)}</p>
            </div>

            <div className="rounded-3xl bg-[#fbf3ed] p-5">
              <p className="text-sm text-muted">Formación</p>
              <p className="mt-1 text-xl font-bold">{team.formation}</p>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto rounded-3xl border border-line bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-line bg-[#fbf3ed]">
                <tr>
                  <th className="px-4 py-3">Jugador</th>
                  <th className="px-4 py-3">Pos</th>
                  <th className="px-4 py-3">Titular</th>
                  <th className="px-4 py-3">Gol</th>
                  <th className="px-4 py-3">Asist</th>
                  <th className="px-4 py-3">Valor</th>
                  <th className="px-4 py-3">Score</th>
                </tr>
              </thead>
              <tbody>
                {players.map((p) => (
                  <tr key={p.id} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 font-medium">{p.name}</td>
                    <td className="px-4 py-3">{p.position}</td>
                    <td className="px-4 py-3">{pct(p.starterProbability)}</td>
                    <td className="px-4 py-3">{pct(p.goalProbability)}</td>
                    <td className="px-4 py-3">{pct(p.assistProbability)}</td>
                    <td className="px-4 py-3">{money(p.fantasyValue)}</td>
                    <td className="px-4 py-3 font-bold text-accent">
                      {p.fantasyScore}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function generateStaticParams() {
  return allTeams.map((team) => ({ id: team.id }));
}
