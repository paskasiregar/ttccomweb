import ClassCard from "./classCard";

export default function ClassType() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 max-w-container">
      <ClassCard
        title="Introduction to coding concepts through play"
        duration="30 menit"
        sessions="2 sesi"
        description="Siswa akan belajar pemrograman melalui aktivitas fisik dan tugas-tugas manual, menggunakan metode pengajaran populer Computer Science Unplugged. Kursus ini mencakup empat modul: Pola, Kode, Algoritma, dan Komputer."
        tools="iPad / Tab"
      />
      <ClassCard
        title="Learning directional commands with Bee-Bots"
        duration="30 menit"
        sessions="2 sesi"
        description="Siswa akan meningkatkan pemikiran logis melalui tantangan matematika dan gamifikasi, mempraktikkan bentuk, perkalian, perbandingan logika, dan berhitung. Mereka akan menggunakan konsep-konsep ini untuk membuat aplikasi sederhana, game 3D, dan memecahkan teka-teki."
        tools="iPad / Tab, Computer"
      />
      <ClassCard
        title="Pattern recognition and sequencing"
        duration="30 menit"
        sessions="2 sesi"
        description="Siswa akan belajar pemrograman melalui aktivitas fisik dan tugas-tugas manual, menggunakan metode pengajaran populer Computer Science Unplugged. Kursus ini mencakup empat modul: Pola, Kode, Algoritma, dan Komputer."
        tools="iPad / Tab"
      />
      <ClassCard
        title="Simple coding games and collaborative tasks"
        duration="30 menit"
        sessions="2 sesi"
        description="Siswa akan belajar pemrograman melalui aktivitas fisik dan tugas-tugas manual, menggunakan metode pengajaran populer Computer Science Unplugged. Kursus ini mencakup empat modul: Pola, Kode, Algoritma, dan Komputer."
        tools="iPad / Tab"
      />
    </div>
  );
}
