import { Sparkles, Brain, Briefcase, Code2 } from "lucide-react";

export default function DashboardPreview() {
  const cards = [
    {
      title: "AI Chat",
      description: "Ask anything about coding or careers.",
      icon: Sparkles,
    },
    {
      title: "DSA Mentor",
      description: "Practice problems with explanations.",
      icon: Brain,
    },
    {
      title: "Resume Analyzer",
      description: "Improve your ATS score instantly.",
      icon: Briefcase,
    },
    {
      title: "Code Assistant",
      description: "Debug and generate production-ready code.",
      icon: Code2,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-32">
      <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Everything in one place
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:scale-105"
            >
              <card.icon className="mb-4 h-8 w-8 text-blue-500" />

              <h3 className="font-semibold">{card.title}</h3>

              <p className="mt-2 text-sm text-zinc-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}