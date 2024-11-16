import ProgramTabs from "@/components/ProgramTabs";

export default function Home() {
  return (
    <main className="w-full">
      <section>
        {/* Header */}
        <Header />

        {/* Other Sections */}
        <Hero />
        <BaitSection />

        {/* Our Program Section */}
        <section className="mt-16">
          <h2 className="text-center text-4xl font-bold mb-8">
            Program <span className="text-purple-700">Kami</span>
          </h2>
          <ProgramTabs />
        </section>

        {/* Other Sections */}
        <ReasonSection />
        <Contact />
        <Footer />
      </section>
    </main>
  );
}
