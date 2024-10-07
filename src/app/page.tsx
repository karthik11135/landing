import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import Grid from "@/components/grid/Grid";
import Waitlist from "@/components/waitlist/Waitlist";
import Price from "@/components/pricing/Price";
import CustomerSection from "@/components/customers/CustomerSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <Hero />
      </div>
      <div>
        <Grid />
      </div>
      <div>
        <Waitlist />
      </div>
      <div>
        <Price />
      </div>
      <div>
        <CustomerSection />
      </div>
      <div className="border-t border-zinc-700">
<Footer />
      </div>
    </>
  );
}
