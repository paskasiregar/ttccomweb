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
  };

  const trackCards = {
    "creative-coding": [
      {
        title: "Introduction to Coding Concepts Through Play",
        duration: "30 menit",
        sessions: "2 sesi",
        description:
          "Siswa akan diperkenalkan dengan konsep dasar pemrograman melalui permainan interaktif yang seru dan edukatif. Aktivitas ini membantu membangun fondasi logika pemrograman sejak dini.",
        tools: "iPad / Tab",
      },
      {
        title: "Learning Directional Commands with Bee-Bots",
        duration: "30 menit",
        sessions: "2 sesi",
        description:
          "Siswa akan belajar mengontrol arah dan logika sederhana menggunakan Bee-Bots. Aktivitas ini mengasah kemampuan berpikir logis dan keterampilan pemecahan masalah.",
        tools: "iPad / Tab, Komputer",
      },
      {
        title: "Pattern recognition and sequencing",
        duration: "30 menit",
        sessions: "2 sesi",
        description:
          "Siswa akan mempelajari cara mengenali pola dan urutan logis melalui tugas-tugas menarik. Aktivitas ini meningkatkan kemampuan observasi dan pengelompokan pola.",
        tools: "iPad / Tab, Komputer",
      },
      {
        title: "Simple coding games and collaborative tasks",
        duration: "30 menit",
        sessions: "2 sesi",
        description:
          "Siswa akan bermain game coding sederhana dan menyelesaikan tugas kolaboratif untuk memahami dasar-dasar pemrograman sambil bekerja sama dalam tim.",
        tools: "iPad / Tab, Komputer",
      },
    ],
    "visual-coding": [
      {
        title: "Introduction to ScratchJr and navigating the interface",
        duration: "45 menit",
        sessions: "2 sesi",
        description:
          "Kenalan dengan ScratchJr dan mulai bikin cerita animasi pertamamu!",
        tools: "Laptop / Komputer",
      },
      {
        title: "Building characters and creating movements",
        duration: "45 menit",
        sessions: "2 sesi",
        description:
          "Hidupkan karaktermu dan buat mereka bergerak dengan mudah!",
        tools: "Tablet / Komputer",
      },
      {
        title:
          "Storytelling with coding, creating a beginning, middle, and end",
        duration: "45 menit",
        sessions: "2 sesi",
        description:
          "Buat cerita seru dengan alur awal, tengah, dan akhir yang menarik.",
        tools: "Tablet / Komputer",
      },
      {
        title: "Adding sounds and interactivity",
        duration: "45 menit",
        sessions: "2 sesi",
        description:
          "Tambahkan suara dan interaksi untuk membuat cerita jadi lebih hidup!",
        tools: "Tablet / Komputer",
      },
      {
        title: "Final project: Designing an animated story",
        duration: "45 menit",
        sessions: "2 sesi",
        description:
          "Buat proyek akhir: cerita animasi keren dari imajinasimu sendiri!",
        tools: "Tablet / Komputer",
      },
    ],
    "web-development": [
      {
        title: "Introduction to Scratch: Motion, looks, and sounds",
        duration: "60 menit",
        sessions: "3 sesi",
        description:
          "Pelajari dasar-dasar Scratch untuk membuat karakter bergerak dan bersuara.",
        tools: "Laptop / Komputer",
      },
      {
        title: "Control blocks and loops",
        duration: "60 menit",
        sessions: "2 sesi",
        description:
          "Gunakan blok kontrol dan loop untuk menciptakan aksi yang keren!",
        tools: "Tablet / Komputer",
      },
      {
        title: "Robotics with Ozobot: Coding paths and commands",
        duration: "60 menit",
        sessions: "3 sesi",
        description:
          "Program robot Ozobot untuk mengikuti jalur dan perintahmu.",
        tools: "Tablet / Komputer",
      },
      {
        title: "Building interactive games with Scratch",
        duration: "60 menit",
        sessions: "2 sesi",
        description: "Buat game interaktif menggunakan Scratch. Seru banget!",
        tools: "Tablet / Komputer",
      },
      {
        title: "Capstone project: A collaborative coding challenge",
        duration: "60 menit",
        sessions: "2 sesi",
        description:
          "Kerjakan tantangan coding bersama teman untuk proyek akhir.",
        tools: "Tablet / Komputer",
      },
    ],
    "basic-programming": [
      {
        title:
          "Python basics: Variables, data types, and simple math operations",
        duration: "90 menit",
        sessions: "3 sesi",
        description:
          "Kenalan sama Python dan belajar hitungan dasar dengan kode.",
        tools: "Laptop / Komputer",
      },
      {
        title: "Loops, conditionals, and functions",
        duration: "90 menit",
        sessions: "2 sesi",
        description:
          "Pelajari cara membuat kode yang cerdas dengan loop dan kondisi.",
        tools: "Tablet / Komputer",
      },
      {
        title: "Web development: HTML and CSS basics",
        duration: "90 menit",
        sessions: "2 sesi",
        description:
          "Bangun halaman web pertamamu dengan HTML dan CSS. Seru kan?",
        tools: "Tablet / Komputer",
      },
      {
        title: "Creating a personal website project",
        duration: "90 menit",
        sessions: "3 sesi",
        description:
          "Buat website pribadi dari nol dan tunjukkan kreativitasmu!",
        tools: "Tablet / Komputer",
      },
      {
        title: "Introduction to JavaScript and interactive web elements",
        duration: "90 menit",
        sessions: "2 sesi",
        description: "Tambah elemen interaktif ke websitemu dengan JavaScript.",
        tools: "Tablet / Komputer",
      },
      {
        title:
          "Final project: A simple app or website with integrated features",
        duration: "90 menit",
        sessions: "2 sesi",
        description:
          "Selesaikan proyek akhir dengan fitur-fitur keren yang kamu pelajari.",
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
          backgroundImage={trackData.backgroundImage}
        />

        {/* Learning Journey Section */}
        <section className="w-full my-8 px-4 sm:px-8 max-w-container py-20">
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
        <section className="w-full my-8 px-4 sm:px-8 max-w-container mb-8">
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
