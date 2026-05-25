import { GraduationCap, Globe, BookOpen, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const facts = [
    {
      icon: <GraduationCap className="w-6 h-6 text-gold-700" />,
      title: "Tanpa Tes Masuk",
      desc: "Penempatan kelas via tes kemampuan bahasa awal"
    },
    {
      icon: <Globe className="w-6 h-6 text-gold-700" />,
      title: "Lingkungan Internasional",
      desc: "Bergaul & berdiskusi bersama pelajar seluruh belahan dunia"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-gold-700" />,
      title: "Akselerasi",
      desc: "Kompresi SMP–SMA secara taktis dalam kurun 1–3 tahun"
    },
    {
      icon: <Award className="w-6 h-6 text-gold-700" />,
      title: "Ijazah Diakui Dunia",
      desc: "Berlaku universitas global tanpa penyetaraan rumit"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#2c060b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column Image Mosaic Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[440px] md:h-[500px]">
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="https://studitimurtengah.com/wp-content/uploads/2024/09/foto-7.webp"
                  alt="Suasana Kelas Mahad Al Azhar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-xl border-2 border-gold-400/20 group">
                <img
                  src="https://studitimurtengah.com/wp-content/uploads/2024/09/3.webp"
                  alt="Masjid Al Azhar Cairo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="https://studitimurtengah.com/wp-content/uploads/2024/09/foto-6.webp"
                  alt="Kelas di Mahad Al Azhar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 -left-4 bg-gradient-to-br from-maroon-950 to-maroon-900 border-2 border-gold-400/30 rounded-2xl p-5 shadow-2xl z-20">
              <strong className="block font-serif text-2xl font-bold text-gold-400">Al-Azhar</strong>
              <span className="text-[0.68rem] tracking-widest text-white/60 uppercase font-semibold">Cairo, Egypt</span>
            </div>
          </motion.div>

          {/* Right Column Text Descriptions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-amber-200 font-sans text-xs font-bold tracking-widest uppercase mb-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full self-start">
              Tentang Program
            </span>
            <h3 className="font-serif text-3xl lg:text-4.5xl font-extrabold text-white leading-tight mb-4">
              Mahad Bu'uts <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400">
                Al-Islamiyyah Al-Azhar
              </span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mb-8" />

            <div className="space-y-4 text-white/70 text-sm lg:text-base leading-relaxed mb-8 font-sans">
              <p>
                Mahad Al Azhar atau nama lengkapnya ialah Mahad Bu'uts Al Islamiyyah Al Azhar adalah program sekolah Tingkat Menengah khusus pelajar asing yang berada di bawah lembaga pendidikan Universitas Al Azhar Kairo Mesir sebagai persiapan untuk masuk jenjang kuliah di universitas Al Azhar Kairo Mesir.
              </p>
              <p>
                Mahad Al Azhar Mesir membuka pendaftaran untuk pelajar asing sepanjang tahun, dengan kriteria umur antara 12 sampai 30 tahun. Penempatan kelas ditentukan berdasarkan tes masuk serta tes penempatan kelas yang dilakukan oleh Mahad secara berkala.
              </p>
              <p className="border-l-4 border-gold-400 pl-4 font-normal text-white/90 bg-white/5 border border-white/10 py-2.5 pr-2 rounded-r-lg">
                Waktu yang dibutuhkan bervariasi tiap pelajar — meskipun durasi normal 6 tahun, tidak sedikit pelajar Indonesia yang dapat menyelesaikannya dalam waktu kurang dari 3 tahun, bahkan ada yang menyelesaikannya dalam setengah tahun.
              </p>
            </div>

            {/* About Facts List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {facts.map((fact, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card p-5 rounded-2xl hover:bg-white/5 hover:border-white/15 transition-all duration-300"
                >
                  <div className="p-2 bg-gold-400/10 rounded-lg w-11 h-11 flex items-center justify-center mb-3">
                    {fact.icon}
                  </div>
                  <h4 className="font-sans font-bold text-sm text-amber-100 mb-1">
                    {fact.title}
                  </h4>
                  <p className="text-white/50 text-xs leading-normal font-sans">
                    {fact.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
