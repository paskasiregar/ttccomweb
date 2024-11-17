"use client";
import { useParams } from "next/navigation";
import TrackTemplate from "../[track]";
import Image from "next/image";
import ljImage from "@/assets/lj.png";
import ProgramTabs from "@/components/programTabs";
import Footer from "@/components/footer";

export default function TrackPage() {
  const { track } = useParams();

  const trackDetails = {
    "creative-coding": {
      title: "Creative Coding Track",
      description:
        "Kenalkan coding ke anak-anak dengan aktivitas seru dan edukatif. Cocok banget buat usia 4-5 tahun untuk membangun kemampuan berpikir logis.",
      backgroundImage:
        "https://www.shutterstock.com/image-vector/border-frame-design-kids-technology-600nw-2112335390.jpg",
    },
    "visual-coding": {
      title: "Visual Coding Track",
      description:
        "Belajar konsep pemrograman visual pakai ScratchJr. Cocok buat anak usia 6-7 tahun untuk bikin cerita dan proyek seru sambil belajar coding dasar.",
      backgroundImage:
        "https://images.unsplash.com/photo-1573164574393-b9b12c3ff9c6",
    },
    "web-development": {
      title: "Web Development Track",
      description:
        "Belajar dasar-dasar pengembangan web dengan HTML, CSS, dan JavaScript. Cocok untuk usia 8-12 tahun untuk membuat proyek web mini yang menarik.",
      backgroundImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    "basic-programming": {
      title: "Basic Programming Track",
      description:
        "Pelajari konsep pemrograman inti dengan Python dan JavaScript. Dirancang untuk usia 13-16 tahun untuk membangun aplikasi dunia nyata dan kemampuan pemecahan masalah.",
      backgroundImage:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    },
  };

  const trackCards = {
    "creative-coding": [
      {
        title: "Introduction to Coding Concepts Through Play",
        duration: "30 menit",
        sessions: "2 sesi",
        description: "Kenalan dengan konsep coding sambil bermain seru!",
        tools: "iPad / Tab",
        image: "https://example.com/creative-coding-1.jpg",
      },
      {
        title: "Learning Directional Commands with Bee-Bots",
        duration: "30 menit",
        sessions: "2 sesi",
        description:
          "Kontrol Bee-Bots untuk mengasah logika dan pemecahan masalah.",
        tools: "iPad / Tab, Komputer",
        image: "https://example.com/creative-coding-2.jpg",
      },
    ],
    "visual-coding": [
      {
        title: "Introduction to ScratchJr and Navigating the Interface",
        duration: "45 menit",
        sessions: "2 sesi",
        description:
          "Kenalan dengan ScratchJr dan mulai bikin animasi pertama!",
        tools: "Laptop / Komputer",
        image: "https://example.com/visual-coding-1.jpg",
      },
      {
        title: "Building Characters and Creating Movements",
        duration: "45 menit",
        sessions: "2 sesi",
        description:
          "Buat karaktermu bergerak dengan coding visual yang mudah.",
        tools: "Tablet / Komputer",
        image: "https://example.com/visual-coding-2.jpg",
      },
    ],
    // Add more cards for other tracks
  };

  const trackData = trackDetails[track] || {
    title: "Track Tidak Ditemukan",
    description: "Track yang kamu cari nggak ada nih.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  };

  const cards = trackCards[track] || [];

  return (
    <div className="mx-auto">
      {/* Back Button */}
      <div className="my-4 px-4 sm:px-8">
        <button
          className="secondary-button"
          onClick={() => (window.location.href = "/")}
        >
          &lt; Kembali
        </button>
      </div>

      {/* Track Template */}
      <section>
        <TrackTemplate
          title={trackData.title}
          description={trackData.description}
          backgroundImage={trackData.backgroundImage}
        />

        {/* Our Program Section */}
        <section className="w-full my-8 px-4 sm:px-8 max-w-container mb-20 py-20">
          <h2 className="text-center text-4xl font-bold mb-8">
            Program <span className="text-purple-700">Kami</span>
          </h2>
          <ProgramTabs cards={cards} />
        </section>
        <Footer className="p-20" />
      </section>
    </div>
  );
}
