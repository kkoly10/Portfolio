import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { WhatIBuild } from "@/components/WhatIBuild";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { personSchema, websiteSchema, projectsItemListSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd
        data={[personSchema(), websiteSchema(), projectsItemListSchema()]}
      />
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
