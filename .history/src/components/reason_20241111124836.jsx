import React from "react";
import ReasonCard from "./reasonCard";
import PrimaryButton from "./primaryButton";
import "@/app/common.css"; // Add global styles if needed

function ReasonSection() {
  return (
    <section className="bg-gray-900 text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-4xl font-bold mb-4 md:mb-0">
            Kenapa pilih kami?
          </h2>
          <PrimaryButton label="Daftar sekarang" />
        </div>
        <p className="text-gray-300 mb-12">
          Kami berkomitmen untuk memberikan pengalaman belajar yang seru,
          efektif, dan mendalam bagi anak-anak Anda. Di Tiny Techfast Club, kami
          percaya bahwa setiap anak berhak memiliki akses ke keterampilan coding
          yang akan membentuk masa depan mereka.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-4 md:gap-1">
          <ReasonCard
            icon={
              <span role="img" aria-label="fun icon">
                🎨
              </span>
            }
            title="Pelajaran seru dan sesuai usia."
            description=""
          />
          <ReasonCard
            icon={
              <span role="img" aria-label="flexible icon">
                🧩
              </span>
            }
            title="Pilihan belajar yang fleksibel."
            description=""
          />
          <ReasonCard
            icon={
              <span role="img" aria-label="expert icon">
                📘
              </span>
            }
            title="Kurikulum dibuat oleh para ahli."
            description=""
          />
        </div>
        <div className="w-full">
          <ReasonCard
            icon={
              <span role="img" aria-label="confidence icon">
                💻
              </span>
            }
            title="Coding membantu anak membangun kepercayaan diri, berpikir kritis, dan kesiapan menghadapi masa depan."
            description=""
          />
        </div>
      </div>
    </section>
  );
}

export default ReasonSection;
