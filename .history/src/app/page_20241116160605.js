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
      <section>
        <div className="p-2">
          <Header />
          <section className="mt-8">
            <BaitSection />
          </section>
        </div>
        <section className="mt-16">
          <Hero />
        </section>
        <section className="mt-16">
          <Product />
        </section>
        <section className="mt-16">
          <ReasonSection />
        </section>
        {/* <section className="mt-16">
          <FlexibleSection />
        </section> */}
        <section className="mt-16">
          <Contact />
        </section>
        <Footer />
      </section>
    </main>
  );
}
