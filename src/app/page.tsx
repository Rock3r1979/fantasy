import Link from "next/link";
import { Layout } from "@/components/layout";
import { allGroups, allRankings, allTeams } from "@/lib/data";

export default function Home() {
  return (
    <Layout>
      <section className="wrap py-12">
        <div className="card p-8 sm:p-10">
          <span className="badge">Base final completa</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Fantasy Mundial 2026 para 48 selecciones y 1.248 jugadores.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            Datos por selección, ranking global y estructura lista para seguir creciendo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/selecciones" className="btn">
              Ver selecciones
            </Link>
            <Link href="/ranking" className="btn-alt">
              Ver ranking
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap pb-12">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {allGroups.map((g) => (
            <div key={g.id} className="card p-5">
              <p className="text-sm font-semibold text-accent">Grupo {g.id}</p>
              <div className="mt-3 space-y-1 text-sm">
                {g.teams.map((id) => (
                  <div key={id}>{allTeams.find((t) => t.id === id)?.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap pb-20">
        <div className="card p-6">
          <h2 className="text-2xl font-bold">Top fantasy</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {allRankings.slice(0, 8).map((p) => (
              <div key={p.id} className="rounded-3xl bg-[#fbf3ed] p-4">
                <p className="text-sm text-muted">#{p.rank}</p>
                <p className="mt-1 font-bold">{p.name}</p>
                <p className="text-sm text-muted">
                  {allTeams.find((t) => t.id === p.teamId)?.name}
                </p>
                <p className="mt-2 text-sm font-semibold text-accent">
                  {p.fantasyScore}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
