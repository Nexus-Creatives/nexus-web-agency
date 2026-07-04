import PricingPage from "@/components/Pricing/PricingPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Page() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1 bg-zinc-950">
        <PricingPage />
      </main>
      <Footer />
    </>
  );
}