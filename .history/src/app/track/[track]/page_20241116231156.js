"use client";
import { useParams } from "next/navigation";
import TrackTemplate from "../[track]";
import Image from "next/image";
import ljImage from "@/assets/lj.png";
import ProgramTabs from "@/components/ProgramTabs";

export default function TrackPage() {
  const { track } = useParams();

  const trackDetails = {
    "creative-coding": {
      title: "Creative Coding Track",
      description:
        "Kenalkan coding pada anak-anak dengan aktivitas seru dan edukatif. Cocok untuk usia 4-5 tahun untuk membangun kemampuan berpikir logis.",
      backgroundImage:
        "https://images.unsplash.com/photo-1544717305-2782549b5136", // Replace with a relevant Creative Coding image
    },
    "visual-coding": {
      title: "Visual Coding Track",
      description:
        "Pelajari konsep pemrograman visual dengan ScratchJr. Cocok untuk usia 6-7 tahun untuk membuat cerita dan proyek sederhana sambil belajar prinsip coding dasar.",
      backgroundImage:
        "https://images.unsplash.com/photo-1573164574393-b9b12c3ff9c6", // Replace with a relevant Visual Coding image
    },
    "web-development": {
      title: "Web Development Track",
      description:
        "Belajar dasar-dasar pengembangan web dengan HTML, CSS, dan JavaScript. Cocok untuk usia 8-12 tahun untuk membuat proyek web mini yang menarik.",
      backgroundImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c", // Replace with a relevant Web Development image
    },
    "basic-programming": {
      title: "Basic Programming Track",
      description:
        "Pelajari konsep pemrograman inti dengan Python dan JavaScript. Dirancang untuk usia 13-16 tahun untuk membangun aplikasi dunia nyata dan kemampuan pemecahan masalah.",
      backgroundImage:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f", // Replace with a relevant Basic Programming image
    },
    // Add more tracks as needed
  };

  const trackData = trackDetails[track] || {
    title: "Track Not Found",
    description: "Track yang Anda cari tidak ditemukan.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Default image for not found
  };

  return (
    <div className="mx-auto">
      {/* Back Button */}
      <div className="my-4 px-4 sm:px-8">
        <button
          className="secondary-button"
          onClick={() => (window.location.href = "/")}
        >
          &lt; Back
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
        <section className="w-full my-8 px-4 sm:px-8 max-w-container mb-8">
          <h2 className="text-center text-4xl font-bold mb-8">
            Program <span className="text-purple-700">Kami</span>
          </h2>
          <ProgramTabs />
        </section>
      </section>
    </div>
  );
}
