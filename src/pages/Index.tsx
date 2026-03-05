import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Videos from "@/components/sections/Videos";
import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";

const Index = () => (
  <>
    <Header />
    <main>
      {/* 1️⃣ promessa forte (hero) */}
      <Hero />
      
      {/* 2️⃣ problema do cliente */}
      <Problem />
      
      {/* 3️⃣ solução */}
      <Solution />
      
      {/* EXTRA: About (Building Authority) */}
      <About />
      
      {/* 4️⃣ portfólio e prova social */}
      <BeforeAfter />
      <Videos />
      
      {/* 5️⃣ benefícios */}
      <Benefits />
      
      {/* 6️⃣ CTA */}
      <CTA />
      
      {/* 7️⃣ FAQ */}
      <FAQ />
      
      {/* 8️⃣ CTA final */}
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
