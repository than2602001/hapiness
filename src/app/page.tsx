import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import EyelashSection from "@/components/EyelashSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimator from "@/components/ScrollAnimator";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <EyelashSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingContact />
      <ScrollAnimator />
    </>
  );
}
