import { Layout } from "@/components/layout";
import { allRankings, allTeams } from "@/lib/data";

export default function Page() {
  return (
    <Layout>
      <section className="wrap py-12">
        <h1 className="text-4xl font-black tracking-tight">Ranking fantasy</h1>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allRankings.map((p) => (
            <article key={p.id} className="card p-5">
              <p className="text-sm text-muted">#{p.rank}</p>
              <h2 className="mt-1 text-xl font-bold">{p.name}</h2>
              <p className="text-sm text-muted">
                {allTeams.find((t) => t.id === p.teamId)?.name}
              </p>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-sm text-muted">Score</p>
                  <p className="text-2xl font-bold text-accent">{p.fantasyScore}</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Valor</p>
                  <p className="text-lg font-semibold">{p.fantasyValue.toFixed(1)} M</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
