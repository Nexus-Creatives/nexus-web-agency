import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ROISection from "@/components/ROISection";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* GSAP Custom Cursor */}
      <CustomCursor />

      {/* Floating Header */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 w-full bg-zinc-950">
        {/* Section 1: Hero & Plexus Particles */}
        <Hero />

        {/* Section 2: Capabilites / Services */}
        <Services />

        {/* Section 3.5: Our Process Timeline */}
        <Process />

        {/* Section 4: Before vs After Interactive Swipe */}
        <Portfolio />

        {/* Section 5: Credibility Statistics */}
        <Stats />

        {/* Section 6: Connection / Lead Initiation Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

