import DashboardPreview from "@/components/layout/dashboard-preview";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <DashboardPreview />
    </main>
  );
}