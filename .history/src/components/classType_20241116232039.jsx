import ClassCard from "./classCard";

export default function ClassType() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-8 max-w-container">
      <ClassCard
        title="Games & Apps"
        duration="60 menit"
        sessions="20 sesi"
        description="Siswa akan belajar pemrograman melalui aktivitas fisik dan tugas-tugas manual, menggunakan metode pengajaran populer Computer Science Unplugged. Kursus ini mencakup empat modul: Pola, Kode, Algoritma, dan Komputer."
        tools="iPad / Tab"
      />
      <ClassCard
        title="Coding with Math"
        duration="60 menit"
        sessions="20 sesi"
        description="Siswa akan meningkatkan pemikiran logis melalui tantangan matematika dan gamifikasi, mempraktikkan bentuk, perkalian, perbandingan logika, dan berhitung. Mereka akan menggunakan konsep-konsep ini untuk membuat aplikasi sederhana, game 3D, dan memecahkan teka-teki."
        tools="iPad / Tab, Computer"
      />
    </div>
  );
}
