import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "NeuroAdaptive UX",
  description: "Clean Vercel-ready build."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="app-gradient-bg min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6">{children}</main>
        <footer className="border-t border-white/5 text-xs text-slate-500 py-3 px-4 sm:px-6">
          NeuroAdaptive UX · Clean Build
        </footer>
      </body>
    </html>
  );
}
