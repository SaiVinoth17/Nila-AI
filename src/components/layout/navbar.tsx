import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Nila
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <Link href="/">Home</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/github">GitHub</Link>
        </nav>

        <button className="rounded-xl border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105">
          Sign In
        </button>
      </div>
    </header>
  );
}