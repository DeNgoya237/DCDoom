import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <TrustSection />
      <ProductGrid />
    </div>
  );
}
