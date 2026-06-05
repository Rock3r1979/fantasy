import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  ["/", "Inicio"],
  ["/selecciones", "Selecciones"],
  ["/jugadores", "Jugadores"],
  ["/ranking", "Ranking"]
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="sticky top-0 z-30 border-b border-line bg-white/80 backdrop-blur">
        <div className="wrap flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight text-accent">
            Fantasy Mundial 2026
          </Link>

          <nav className="flex flex-wrap gap-2">
            {nav.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
