import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Fantasy Mundial 2026", description: "Web fantasy para analizar selecciones, jugadores y construir el mejor XI del Mundial 2026" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="es"><body>{children}</body></html>; }
