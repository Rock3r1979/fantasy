import "./globals.css";

export const metadata = {
  title: "Fantasy Mundial 2026",
  description: "Versión final completa"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
