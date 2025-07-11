import About from "@/components/About";
import Qualification from "@/components/qualification"
import HeroSection from "@/components/Hero";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Experience from "@/components/experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="flex flex-col  gap-[32px] overflow-x-hidden bg-background text-foreground pt-16 items-center sm:items-start w-full h-full"> */}
        <div className="fixed inset-0 -z-10">
          <SparklesCore
            background="transparent"
            maxSize={1}
            minSize={0.5}
            particleColor="#5B7995"
            particleDensity={150}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
          />
        </div>
        <div className="pt-20">
          <HeroSection />
          <div  id="about">
          <About/>
          </div>
          <div id="experience" >
            <Experience/>
          </div>
          <div id="qualification">
            <Qualification/>
          </div>
          <div id="projects">
            <Projects/>
          </div>
        </div>
      {/* </main> */}
    </div>
  );
}
