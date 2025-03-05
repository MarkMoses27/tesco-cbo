import Hero from "./home/Hero";
import About from "./home/About";
import MissionVision from "./home/MissionVision";
import FocusAreas from "./home/FocusAreas";
import Partners from "./home/Partners";

export default function Homepage() {
  return (
    <div className="bg-amber-50 overflow-x-hidden w-full max-w-[100vw] box-border">
      <main className="w-full box-border">
        <Hero />
        <About />
        <MissionVision />
        <FocusAreas />
        <Partners />
      </main>
    </div>
  )
}