import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-[#0a0a0a] min-h-screen selection:bg-green-500/30 selection:text-green-500">
      <Navbar />
      <Hero />
      {/* অন্য সেকশনগুলো এখানে যোগ করুন */}
    </main>
  );
}
