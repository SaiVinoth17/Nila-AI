export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb22,transparent_60%)]" />

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-7xl font-bold leading-tight">
          Meet <span className="text-blue-500">Nila</span>
        </h1>

        <h2 className="mt-6 text-5xl font-semibold">
          The AI Operating System
          <br />
          for Developers.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
          Build projects. Learn DSA. Crack interviews.
          Everything powered by one intelligent assistant.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500">
            Start Building
          </button>

          <button className="rounded-xl border border-white/10 px-6 py-3">
            Documentation
          </button>
        </div>
      </div>
    </section>
  );
}