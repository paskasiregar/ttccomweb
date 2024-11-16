import React from "react";
import ProductCard from "./productCard";
import "@/app/common.css"; // Add global styles if needed
import Link from "next/link";

function Product() {
  return (
    <section className="max-w-7xl mx-auto p-2">
      <h2 className="text-6xl font-bold p-4">Produk kami</h2>
      <p className="text-gray-500 mb-4 p-4">
        Jalur belajar untuk semua usia, mulai dari 4-16 tahun.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <Link href="/pages/tracks_temp">
          <ProductCard
            icon={
              <span role="img" aria-label="creative icon">
                🎨
              </span>
            }
            title="Creative Coding Track"
            ageRange="Usia 4-5 Tahun"
            description="Pengantar coding dengan kegiatan bermain yang interaktif dan pengenalan logika sederhana menggunakan mainan edukatif."
            bgColor="bg-purple-50"
          />
        </Link>
        <ProductCard
          icon={
            <span role="img" aria-label="visual coding icon">
              👾
            </span>
          }
          title="Visual Coding Track"
          ageRange="Usia 6-7 Tahun"
          description="Belajar dasar-dasar pemrograman visual dengan ScratchJr untuk membuat cerita dan proyek sederhana."
          bgColor="bg-yellow-50"
        />
        <ProductCard
          icon={
            <span role="img" aria-label="web development icon">
              🌐
            </span>
          }
          title="Web Development Track"
          ageRange="Usia 8-12 Tahun"
          description="Belajar dasar-dasar pengembangan web dengan HTML, CSS, dan pembuatan proyek mini."
          bgColor="bg-purple-50"
        />
        <ProductCard
          icon={
            <span role="img" aria-label="programming icon">
              💻
            </span>
          }
          title="Basic Programming Track"
          ageRange="Usia 13-16 Tahun"
          description="Pemrograman Python, pengembangan aplikasi sederhana, dan dasar-dasar JavaScript."
          bgColor="bg-yellow-50"
        />
      </div>
    </section>
  );
}

export default Product;
