import NavBar from "./components/nav/nav-bar";
import HeroSection from "./components/ui/hero-section";
import Usp from "./components/ui/usp";

export default function Home() {
  return (
    <main className="flex animate-in flex-col items-center gap-12 w-full px-4 mx-auto max-w-7xl">
      <NavBar />

      <HeroSection />
      <Usp />
    </main>
  );
}
1;
