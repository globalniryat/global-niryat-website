import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import LMSHero from '@/components/sections/LMSHero';
import ECommerce from '@/components/sections/ECommerce';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ECommerce />
        <LMSHero />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

