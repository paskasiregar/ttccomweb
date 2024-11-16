import ClassCard from "./classCard";

export default function ClassType() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 max-w-container">
      <ClassCard
        title="Introduction to coding concepts through play"
        duration="30 menit"
        sessions="2 sesi"
        description="Siswa akan diperkenalkan dengan konsep dasar pemrograman melalui permainan interaktif yang seru dan edukatif. Aktivitas ini membantu membangun fondasi logika pemrograman sejak dini."
        tools="iPad / Tab"
      />
      <ClassCard
        title="Learning directional commands with Bee-Bots"
        duration="30 menit"
        sessions="2 sesi"
        description="Siswa akan belajar mengontrol arah dan logika sederhana menggunakan Bee-Bots. Aktivitas ini mengasah kemampuan berpikir logis dan keterampilan pemecahan masalah."
        tools="iPad / Tab, Computer"
      />
      <ClassCard
        title="Pattern recognition and sequencing"
        duration="30 menit"
        sessions="2 sesi"
        description="Siswa akan mempelajari cara mengenali pola dan urutan logis melalui tugas-tugas menarik. Aktivitas ini meningkatkan kemampuan observasi dan pengelompokan pola."
        tools="iPad / Tab"
      />
      <ClassCard
        title="Simple coding games and collaborative tasks"
        duration="30 menit"
        sessions="2 sesi"
        description="Siswa akan bermain game coding sederhana dan menyelesaikan tugas kolaboratif untuk memahami dasar-dasar pemrograman sambil bekerja sama dalam tim."
        tools="iPad / Tab"
      />
    </div>
  );
}
