import { Logo } from "@/components/app/logo";
import { Navbar } from "../navbar";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-14 border-b border-slate-800 bg-slate-950/40 backdrop-blur-lg">
      <div className="container mx-auto h-full flex items-center justify-between gap-4 px-6 lg:px-0">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}