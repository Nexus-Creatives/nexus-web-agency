"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const form = formRef.current;

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    
    if (hero) tl.fromTo(hero, { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
    if (form) tl.fromTo(form, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.7");
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main ref={containerRef} className="flex-1 w-full bg-zinc-950 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
          
          {/* Header */}
          <section ref={heroRef} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Let's Connect
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Digital Evolution</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
              Ready to scale? Whether you have a clear vision or need us to build one, let's start the conversation.
            </p>
          </section>

          {/* Contact Layout */}
          <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="bg-zinc-900/30 border border-white/10 p-8 rounded-3xl flex flex-col gap-8">
              <h2 className="text-2xl font-bold text-white">Direct Channels</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@nexus.agency" },
                  { icon: Phone, label: "Call/Text", value: "+1 (555) 000-0000" },
                  { icon: MapPin, label: "Base", value: "Global Digital Agency" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 font-medium">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="bg-zinc-900/30 border border-white/10 p-8 rounded-3xl flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                <input type="email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
              </div>
              <textarea placeholder="Tell us about your project..." rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"></textarea>
              <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                Send Request <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
