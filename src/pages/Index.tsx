import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Videos from "@/components/sections/Videos";
import Differentiator from "@/components/sections/Differentiator";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <BeforeAfter />
      <Videos />
      <Differentiator />
      <CTA />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
