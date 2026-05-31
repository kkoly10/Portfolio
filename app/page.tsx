import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { WhatIBuild } from "@/components/WhatIBuild";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <WhatIBuild />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
