import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative bg-w bg-center bg-[#121212]">
      
      
      {/* Display Social Icons */}
      <div className="flex justify-center mt-4">
        <Social
        containerStyles="flex gap-6"
        iconStyles="w-6 h-6 text-gray-300 hover:text-accent transition duration-300"
        textStyles="text-gray-300 hover:text-accent transition duration-300"
        />
      </div>
      
      <Navbar />

      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}