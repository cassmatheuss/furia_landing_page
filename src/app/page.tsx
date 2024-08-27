import { Hero } from "@/components/Hero";
import redbull from "@/assets/redbull.png"
import pokerstars from "@/assets/pokerstars.svg"
import legion from "@/assets/legion.png"
import { Sponsors } from "@/components/Sponsors";
import { About } from "@/components/About";
import hellmanns from "@/assets/hellmanns.svg"
import betnacional from "@/assets/betnacional.png"
import cruzeirodosul from "@/assets/cruzeirodosul.png"
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Hero />
    <Sponsors image1={pokerstars} image2={redbull} image3={legion} />
    <About />
    <Sponsors image1={hellmanns} image2={betnacional} image3={cruzeirodosul} />
    <Contact />
    <Footer />
    </>
  );
}
