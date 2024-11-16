import BaitSection from "@/components/bait";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ReasonSection from "@/components/reason";

export default function Home() {
  return (
    <main className="w-full">
      {/* Header Section */}
      <section>
        <div className="p-2">
          <Header />
          <section className="mt-8">
            <BaitSection />
          </section>
        </div>
      </section>

      {/* Hero Section */}
      <section className="mt-16">
        <Hero />
      </section>

      {/* Product Section (Integrated TrackTemplate) */}
      <section className="mt-16">
        <div className="relative h-screen w-full">
          <img
            src="https://images.unsplash.com/photo-1494783367193-149034c05e8f"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl text-white font-bold">
              Explore Our Tracks
            </h1>
            <p className="text-xl text-white mt-4">
              Choose the perfect coding track tailored for your child.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example Cards for Tracks */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Creative Coding Track</h2>
            <p className="text-gray-700">
              Interactive coding activities using fun and educational tools.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Visual Coding Track</h2>
            <p className="text-gray-700">
              Learn visual programming basics with ScratchJr for storytelling.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Web Development Track</h2>
            <p className="text-gray-700">
              Explore HTML, CSS, and basic web development projects.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Basic Programming Track</h2>
            <p className="text-gray-700">
              Python basics, application development, and JavaScript
              foundations.
            </p>
          </div>
        </div>
      </section>

      {/* Reason Section */}
      <section className="mt-16">
        <ReasonSection />
      </section>

      {/* Contact Section */}
      <section className="mt-16">
        <Contact />
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
