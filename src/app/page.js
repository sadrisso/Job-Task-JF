import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  const products = [
    {
      title: "FGC Beesthe Tonding 80s",
      image: "https://i.ibb.co/xKcTq4V9/image4.jpg",
      price: "₱4,950.00 - ₱18,850.00",
      button: "Shop Now",
    },
    {
      title: "GI Footly Mesh",
      image: "https://i.ibb.co/v4N8ZLTK/farming-field-acre-topsoil.jpg",
      price: "₱1,260.00 - ₱10,750.00",
      button: "Shop Now",
    },
    {
      title: "JF Bluelink Mesh",
      image: "https://i.ibb.co/YV3YMzq/jaipur-krishi-engineers.jpg",
      price: "₱3,067.50 - ₱6,325.50",
      button: "Shop Now",
    },
    {
      title: "JF Colbed Wire-21D 0681",
      image:
        "https://i.ibb.co/8DGmQT0z/aspee-paddy-thresher-15-05-2023-096-272454904-j6s6r3x8.png",
      price: "₱4,950.00",
      button: "Shop Now",
    },
    {
      title: "FGC Beesthe Tonding 80s",
      image: "https://i.ibb.co/nqpQKxqY/H2d1508deb601404fa44f0a054fcf26524.jpg",
      price: "₱4,950.00 - ₱18,850.00",
      button: "Shop Now",
    },
    {
      title: "GI Footly Mesh",
      image: "https://i.ibb.co/wrNv0WFL/agriculture-equipment-196.jpg",
      price: "₱1,260.00 - ₱10,750.00",
      button: "Shop Now",
    },
    {
      title: "JF Colbed Wire-21D 0681",
      image: "https://i.ibb.co/1YR7SDcB/hardware-bolts.png",
      price: "₱4,950.00",
      button: "Shop Now",
    },
    {
      title: "JF Bluelink Mesh",
      image: "https://i.ibb.co/wF2Fhdpp/pvc-tubing-double-layer.png",
      price: "₱3,067.50 - ₱6,325.50",
      button: "Shop Now",
    },
  ];

  const landscapeProducts = [
    {
      title: "FGC Beesthe Tonding 80s",
      image: "https://i.ibb.co/vCrVNyFL/lands-1.jpg",
      price: "₱4,950.00 - ₱18,850.00",
      button: "Shop Now",
    },
    {
      title: "GI Footly Mesh",
      image: "https://i.ibb.co/jPNbTt8Q/lands-2.jpg",
      price: "₱1,260.00 - ₱10,750.00",
      button: "Shop Now",
    },
    {
      title: "JF Bluelink Mesh",
      image: "https://i.ibb.co/Df6nbn8v/lands-3.webp",
      price: "₱3,067.50 - ₱6,325.50",
      button: "Shop Now",
    },
    {
      title: "JF Colbed Wire-21D 0681",
      image: "https://i.ibb.co/QF8YqYSf/lands-4.jpg",
      price: "₱4,950.00",
      button: "Shop Now",
    },
    {
      title: "FGC Beesthe Tonding 80s",
      image: "https://i.ibb.co/pjNtk4Hy/lands-5.jpg",
      price: "₱4,950.00 - ₱18,850.00",
      button: "Shop Now",
    },
    {
      title: "GI Footly Mesh",
      image: "https://i.ibb.co/hJB3PDnf/lands-6.jpg",
      price: "₱1,260.00 - ₱10,750.00",
      button: "Shop Now",
    },
  ];

  return (
    <div className="bg-white text-black">
      <div id="home">
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Products title="Agricultural Products" products={products} />
      </div>

      <div id="shop">
        <Products title="Landscape Products" products={landscapeProducts} />
      </div>

      <div className="py-5 px-2">
        <TrustSection />
      </div>
    </div>
  );
}
