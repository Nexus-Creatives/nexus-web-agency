import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SeoPackagePage from "@/components/Pricing/SeoPackagePage";

export const metadata: Metadata = {
  title: "SEO Package",
  description:
    "Improve your visibility on Google with on-page SEO optimization. Starting at ₱6,000 — add to any Nexus website package.",
};

export default function Page() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1 bg-zinc-950">
        <SeoPackagePage />
      </main>
      <Footer />
    </>
  );
}
