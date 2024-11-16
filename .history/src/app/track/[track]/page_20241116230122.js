"use client";
import { useParams } from "next/navigation";
import TrackTemplate from "../[track]";
import Image from "next/image";
import ljImage from "@/assets/lj.png";

export default function TrackPage() {
  const { track } = useParams();

  const trackDetails = {
    "creative-coding": {
      title: "Creative Coding Track",
      description:
        "Kenalkan coding ke anak-anak dengan aktivitas seru dan edukatif. Cocok banget buat usia 4-5 tahun untuk membangun kemampuan berpikir logis.",
      backgroundImage:
        "https://images.unsplash.com/photo-1544717305-2782549b5136", // Replace with a relevant Creative Coding image
    },
    "visual-coding": {
      title: "Visual Coding Track",
      description:
        "Belajar konsep pemrograman visual pakai ScratchJr. Cocok buat anak usia 6-7 tahun untuk bikin cerita dan proyek seru sambil belajar coding dasar.",
      backgroundImage:
        "https://images.unsplash.com/photo-1573164574393-b9b12c3ff9c6", // Replace with a relevant Visual Coding image
    },
    "web-development": {
      title: "Web Development Track",
      description:
        "Pelajari dasar-dasar pengembangan web pakai HTML, CSS, dan JavaScript. Cocok untuk anak usia 8-12 tahun yang mau bikin proyek mini web seru.",
      backgroundImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c", // Replace with a relevant Web Development image
    },
    "basic-programming": {
      title: "Basic Programming Track",
      description:
        "Belajar konsep pemrograman inti pakai Python dan JavaScript. Dirancang untuk usia 13-16 tahun yang pengen bikin aplikasi nyata dan mengasah kemampuan problem-solving.",
      backgroundImage:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f", // Replace with a relevant Basic Programming image
    },
    // Add more tracks as needed
  };

  const trackData = trackDetails[track] || {
    title: "Track Tidak Ditemukan",
    description: "Track yang kamu cari nggak ada nih.",
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

        {/* Learning Journey Section */}
        <section className="w-full my-8 px-4 sm:px-8 max-w-container py-20">
          <div>
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
              {/* Title */}
              <div className="max-w-lg md:w-1/2">
                <h1 className="text-6xl md:text-6xl font-bold mb-8">
                  Learning <span className="text-purple-700">Journey</span>
                </h1>
              </div>

              {/* Description */}
              <div className="mt-6 md:mt-0 md:w-1/2 mb-8">
                <p className="text-gray-600 text-base md:text-md">
                  Yuk, mulai perjalanan belajar yang seru dan inspiratif buat
                  anak-anak! Kami hadir untuk membantu anak-anak mengembangkan
                  kreativitas, berpikir logis, dan percaya diri. Dengan berbagai
                  track yang disesuaikan untuk setiap usia, pengalaman belajar
                  jadi menyenangkan dan berkesan.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="mt-6 md:mt-0 mb-8">
              <Image
                src={ljImage}
                alt="Perjalanan Belajar"
                width={1440} // Adjust width as needed
                height={1000} // Adjust height as needed
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Program Section */}
        <section className="w-full my-8 px-4 sm:px-8 max-w-container mb-8">
          <div>
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
              {/* Title */}
              <div className="max-w-lg md:w-1/2">
                <h1 className="text-6xl md:text-6xl font-bold mb-8 flex flex-row items-center space-x-2">
                  <span>Program</span>
                  <span className="text-purple-700">Kami</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
