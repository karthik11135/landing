import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import HeroPicSection from "@/components/hero/HeroPicSection";
import Grid from "@/components/grid/Grid";

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
    </>
  );
}
