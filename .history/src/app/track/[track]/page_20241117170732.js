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
        "https://thehub.ca/wp-content/uploads/2022/10/CP1676640_web-960x540.jpg",
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
        description:
          "Kenalkan konsep coding dasar melalui aktivitas bermain yang seru.",
        tools: "iPad / Tab",
      },
      {
        title: "Learning Directional Commands with Bee-Bots",
        duration: "30 menit",
        sessions: "2 sesi",
        description:
          "Pelajari arah dan logika sederhana dengan Bee-Bots yang menyenangkan.",
        tools: "iPad / Tab, Komputer",
      },
      {
        title: "Pattern Recognition and Sequencing",
        duration: "30 menit",
        sessions: "2 sesi",
        description: "Asah kemampuan mengenali pola dan urutan dengan mudah.",
        tools: "iPad / Tab, Komputer",
      },
      {
        title: "Simple Coding Games and Collaborative Tasks",
        duration: "30 menit",
        sessions: "2 sesi",
        description: "Main game coding sederhana dan bekerja sama dalam tim.",
        tools: "iPad / Tab, Komputer",
      },
    ],
    "visual-coding": [
      {
        title: "Introduction to ScratchJr and Navigating the Interface",
        duration: "45 menit",
        sessions: "2 sesi",
        description:
          "Mulai petualangan codingmu dengan ScratchJr dan animasi seru.",
        tools: "Laptop / Komputer",
      },
      {
        title: "Building Characters and Creating Movements",
        duration: "45 menit",
        sessions: "2 sesi",
        description: "Hidupkan karaktermu dengan gerakan dan animasi menarik.",
        tools: "Tablet / Komputer",
      },
      {
        title: "Storytelling with Coding",
        duration: "45 menit",
        sessions: "2 sesi",
        description: "Buat cerita interaktif dengan awal, tengah, dan akhir.",
        tools: "Tablet / Komputer",
      },
    ],
    "web-development": [
      {
        title: "Introduction to Scratch: Motion, Looks, and Sounds",
        duration: "60 menit",
        sessions: "3 sesi",
        description:
          "Kenalan dengan Scratch dan mulai buat animasi dan efek suara.",
        tools: "Laptop / Komputer",
      },
      {
        title: "Control Blocks and Loops",
        duration: "60 menit",
        sessions: "2 sesi",
        description:
          "Gunakan blok kontrol dan loop untuk aksi keren di Scratch.",
        tools: "Tablet / Komputer",
      },
      {
        title: "Building Interactive Games with Scratch",
        duration: "60 menit",
        sessions: "2 sesi",
        description: "Buat game interaktif yang seru dengan Scratch.",
        tools: "Tablet / Komputer",
      },
    ],
    "basic-programming": [
      {
        title:
          "Python Basics: Variables, Data Types, and Simple Math Operations",
        duration: "90 menit",
        sessions: "3 sesi",
        description: "Pelajari Python dasar untuk logika coding yang kuat.",
        tools: "Laptop / Komputer",
      },
      {
        title: "Loops, Conditionals, and Functions",
        duration: "90 menit",
        sessions: "2 sesi",
        description: "Buat kode cerdas dengan loop dan fungsi Python.",
        tools: "Tablet / Komputer",
      },
      {
        title: "Creating a Personal Website",
        duration: "90 menit",
        sessions: "3 sesi",
        description: "Bangun website pribadi untuk menunjukkan kreativitasmu.",
        tools: "Tablet / Komputer",
      },
    ],
  };

  const trackData = trackDetails[track] || {
    title: "Track Tidak Ditemukan",
    description: "Track yang kamu cari nggak ada nih.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Default image for not found
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
          backgroundImage={trackCards.backgroundImage}
        />

        {/* Learning Journey Section */}
        <section className="w-full my-8 px-4 sm:px-8 max-w-container mb-20 py-20">
          <div>
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
              <div className="max-w-lg md:w-1/2">
                <h1 className="text-6xl md:text-6xl font-bold mb-8">
                  Learning <span className="text-purple-700">Journey</span>
                </h1>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2 mb-8">
                <p className="text-gray-600 text-base md:text-md">
                  Yuk, mulai perjalanan belajar yang seru dan inspiratif buat
                  anak-anak!
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 mb-8">
              <Image
                src={ljImage}
                alt="Perjalanan Belajar"
                width={1440}
                height={1000}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Program Section */}
        <section className="w-full my-8 px-4 sm:px-8 max-w-container mb-20 py-20">
          <h2 className="text-center text-4xl font-bold mb-8">
            Program <span className="text-purple-700">Kami</span>
          </h2>
          <ProgramTabs cards={cards} />
        </section>
        <br />
        <Footer className="p-20" />
      </section>
    </div>
  );
}
