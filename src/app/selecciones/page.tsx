import Link from "next/link";
import { Layout } from "@/components/layout";
import { allTeams, getPlayer, getPlayersByTeam } from "@/lib/data";
import { money, pct } from "@/lib/utils";

export default function Page() {
  return (
    <Layout>
      <section className="wrap py-12">
        <h1 className="text-4xl font-black tracking-tight">Selecciones</h1>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {allTeams.map((team) => {
            const squad = getPlayersByTeam(team.id).sort(
              (a, b) => b.fantasyScore - a.fantasyScore
            );
            const best = getPlayer(team.bestPlayerId);
            const mv = getPlayer(team.mostValuablePlayerId);

            return (
              <article key={team.id} className="card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-4xl">{team.flag}</p>
                    <h2 className="mt-3 text-2xl font-bold">{team.name}</h2>
                    <p className="text-sm text-muted">
                      Grupo {team.group} · {team.coach}
                    </p>
                  </div>

                  <span className="badge">{pct(team.qualifyProbability)}</span>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-[#fbf3ed] p-4">
                    <p className="text-sm text-muted">Mejor fantasy</p>
                    <p className="mt-1 font-bold text-accent">{best?.name}</p>
                  </div>

                  <div className="rounded-3xl bg-[#fbf3ed] p-4">
                    <p className="text-sm text-muted">Más valorado</p>
                    <p className="mt-1 font-bold">{mv?.name}</p>
                    <p className="text-sm">{money(mv?.fantasyValue ?? 0)}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold">Once probable</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {squad.slice(0, 11).map((p) => (
                      <div
                        key={p.id}
                        className="rounded-2xl border border-line bg-white px-4 py-3 text-sm"
                      >
                        <span className="font-semibold">{p.name}</span>
                        <span className="ml-2 text-muted">{p.position}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Link href={`/selecciones/${team.id}`} className="btn-alt">
                    Detalle
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
