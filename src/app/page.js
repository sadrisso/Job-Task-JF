import AgriculturalProducts from "@/components/AgriculturalProducts";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <AgriculturalProducts />
      </div>
    </div>
  );
}
