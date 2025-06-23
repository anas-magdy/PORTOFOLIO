import Image from "next/image";
import HeroSection from "./HeroSection";
import ProfileSection from "./ProfileSection";
export default function Home() {
  return (
    <div className="grid items-center items-center h-[100vh]">
      <HeroSection />
      <ProfileSection></ProfileSection>

      <div className="relative w-full overflow-hidden h-[350px]">
        <Image
          src="/uiux.jpg"
          alt="uiux"
          fill
          quality={100}
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">UI / UX Design</h1>
        </div>
      </div>

    </div>
  );
}
