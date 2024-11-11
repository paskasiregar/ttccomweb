import React from "react";
import BaitCard from "./baitCard";
import "@/app/common.css"; // Add global styles if needed

function BaitSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="p-8 md:p-20 bg-gradient-to-r from-black to-purple-700 text-white text-center rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold flex items-center justify-center mb-2">
          <span role="img" aria-label="surprised emoji">
            😱
          </span>{" "}
          Tolong!
        </h1>
        <h2 className="text-lg md:text-2xl font-normal">IT di mana-mana!</h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BaitCard
          icon={
            <span role="img" aria-label="IT icon">
              👨‍💻
            </span>
          }
          title="Apakah perlu belajar IT?"
          description="Teknologi sudah jadi bagian dari kehidupan sehari-hari. Mulai dari TikTok sampai ChatGPT, semuanya adalah IT. Anak yang paham dasar-dasar IT sejak kecil bakal tumbuh siap menghadapi tantangan dengan percaya diri."
          source="World Economic Forum, 2020"
        />
        <BaitCard
          icon={
            <span role="img" aria-label="warning icon">
              ⚠️
            </span>
          }
          title="Hindari keterlambatan di masa depan"
          description="Banyak orang dewasa sekarang kejar-kejaran ikut bootcamp IT karena ketinggalan belajar. Biar anak Anda nggak ngalamin hal yang sama, ajarkan mereka dari awal."
          source="Stack Overflow, 2021"
        />
        <BaitCard
          icon={
            <span role="img" aria-label="graduation cap icon">
              🎓
            </span>
          }
          title="Bekal sejak dini untuk si kecil"
          description="Belajar coding dari kecil bikin anak lebih percaya diri dan nggak takut hadapi dunia teknologi."
          source="Massachusetts Institute of Technology, 2018"
        />
      </div>
    </section>
  );
}

export default BaitSection;
