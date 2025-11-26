import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <PortfolioPreview />
      <Footer />
    </main>
  );
}
