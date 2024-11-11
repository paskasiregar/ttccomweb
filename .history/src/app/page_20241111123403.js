import BaitSection from "@/components/bait";
import Contact from "@/components/contact";
import FlexibleSection from "@/components/flexible";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Product from "@/components/product";
import ReasonSection from "@/components/reason";

export default function Home() {
  return (
    <main className="w-full">
      <div className="">
        <Header />
        <br />
        <BaitSection />
        <br />
        <Hero />
        <br />
        <Product />
        <br />
        <ReasonSection />
        <br />
        <FlexibleSection />
        <br />
        <Contact />
        <br />
        <Footer />
      </div>
    </main>
  );
}
