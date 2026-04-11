import Cursor from '@/components/Cursor';
import Particles from '@/components/Particles';
import ProgressBar from '@/components/ProgressBar';
import ScrollReveal from '@/components/ScrollReveal';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Client-side utilities */}
      <ProgressBar />
      <Cursor />
      <Particles />
      <ScrollReveal />

      {/* Layout */}
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
