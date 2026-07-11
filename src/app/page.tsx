export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold tracking-tight">
        Nila
      </h1>

      <p className="mt-6 max-w-xl text-center text-lg text-zinc-400">
        Your AI Career Companion for Developers.
      </p>

      <button className="mt-10 rounded-xl bg-white px-6 py-3 text-black font-semibold transition hover:scale-105">
        Get Started
      </button>
    </main>
  );
}