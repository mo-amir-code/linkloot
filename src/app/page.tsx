import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import OurServices from "@/sections/OurServices";
import ReferGuide from "@/sections/ReferGuide";


export default function Home() {
  return (
    <main className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-center justify-start tracking-[normal]" >
      <Header />
      <Hero />
      <ReferGuide />
      <OurServices />
      <Footer />
    </main>
  );
}
