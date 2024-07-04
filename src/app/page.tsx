import Image from "next/image";
import type { Metadata } from "next";

// Components
import HeaderHome from "@/components/layouts/home/header";
import BenefitHome from "@/components/layouts/home/benefit";
import TipeRumahHome from "@/components/layouts/home/tipe-rumah";
import LokasiTestimoniHome from "@/components/layouts/home/lokasi-testimoni";
import PromoHome from "@/components/layouts/home/promo";

export const metadata: Metadata = {
  title: "Echo Pines Estate",
  description: "Echo Pines Estate is a premier housing development offering luxurious homes nestled in a serene environment. Discover a harmonious blend of nature and modern living with top-notch amenities, secure surroundings, and easy access to urban conveniences. Welcome to your dream home at Echo Pines Estate.",
  keywords: ["Echo Pines Estate", "Echo Pines", "Estate"],
  icons: {
    icon: '/favicon.png'
  },
};

export default function Home() {
  return (
    <main className="">
      <HeaderHome />
      <BenefitHome />
      <TipeRumahHome />
      <LokasiTestimoniHome />
      <PromoHome />
    </main>
  );
}
