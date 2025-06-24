import Image from "next/image";
import HeroSection from "./HeroSection";
import ProfileSection from "./ProfileSection";
import Project from "./Project";
export default function Home() {
  return (
    <div className="grid">
      <HeroSection />
      <ProfileSection></ProfileSection>

      <div className="w-full h-[350px] bg-[url('/uiux.jpg')] bg-cover flex items-center justify-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">
          UI / UX Designs
        </h1>
      </div>
      <Project></Project>

    </div>
  );
}
