import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
    </main>
  );
}