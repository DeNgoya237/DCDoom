import "../components/Navbar"; // Ensure Tailwind classes are picked up if they were only used here (unlikely)
import "./globals.css";

export const metadata = {
  title: "DENGOYA Digitals",
  description: "Votre plateforme de produits digitaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col font-sans text-gray-900 bg-white">
          {children}
      </body>
    </html>
  );
}
