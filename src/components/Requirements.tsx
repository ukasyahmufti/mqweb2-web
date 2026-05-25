import { CheckCircle2, Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Requirements() {
  const requirements = [
    "Usia 12 Tahun – 30 Tahun",
    "Minimal lulus SD berijazah Negeri",
    "Sehat Jasmani dan Rohani",
    "Mandiri tingkat pemahaman",
    "Siap mengikuti pembelajaran di Mahad Al Azhar Kairo Mesir",
    "Siap mengikuti Tata tertib di Asrama dan di Mahad Al Azhar",
    "Menyelesaikan administrasi Pendaftaran, pemberkasan, Asrama dan pengurusan di Kairo Mesir"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="requirements" className="py-24 bg-[#2c060b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column Requirements List */}
          <div className="lg:col-span-7">
            <span className="text-amber-200 font-sans text-xs font-bold tracking-widest uppercase mb-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block font-medium">
              Persyaratan Peserta
            </span>
            <h3 className="font-serif text-3xl lg:text-4.5xl font-extrabold text-white leading-tight mb-4">
              Siapa yang <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400">
                Bisa Mendaftar?
              </span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mb-8" />

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {requirements.map((req, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-4 glass-card p-5 rounded-2xl hover:translate-x-2 transition-transform duration-300 hover:bg-white/5"
                >
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  </div>
                  <span className="text-white/80 text-sm lg:text-base leading-relaxed font-sans font-medium">
                    {req.includes('12 Tahun') ? (
                      <>
                        Usia <strong className="text-amber-100 font-bold">12 Tahun – 30 Tahun</strong>
                      </>
                    ) : req.includes('lulus SD') ? (
                      <>
                        Minimal lulus <strong className="text-amber-100 font-bold">SD berijazah Negeri</strong>
                      </>
                    ) : (
                      req
                    )}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Column Process Flow Visual Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 glass-card-heavy rounded-3xl p-8 sticky lg:top-28"
          >
            <h4 className="font-serif text-xl font-bold mb-2 text-white">Alur Pendaftaran</h4>
            <p className="text-white/60 text-sm mb-6 leading-relaxed font-sans">
              Proses mudah — peserta hanya perlu membuat paspor secara mandiri. Semua urusan birokrasi, penempatan, visa, asrama & peberkasan kami tangani terpadu!
            </p>

            {/* Age Range Display Banner */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="font-serif text-2xl font-extrabold text-amber-200">12</div>
                <div className="text-[0.62rem] text-white/50 uppercase tracking-widest font-semibold mt-1">Usia Min</div>
              </div>
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="font-serif text-2xl font-extrabold text-amber-200">30</div>
                <div className="text-[0.62rem] text-white/50 uppercase tracking-widest font-semibold mt-1">Usia Max</div>
              </div>
            </div>

            {/* Timeline Image Visual */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/10 aspect-square mb-6 group">
              <img
                src="https://studitimurtengah.com/wp-content/uploads/2024/09/IMG-20240516-WA0006-768x768-1.webp"
                alt="Alur Pendaftaran"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>

            <div className="h-[1px] bg-white/10 mb-6" />

            <a
              href="https://drive.google.com/drive/folders/13M6yNgYhegFC-V41aYAzA4MP0WPptBu?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-maroon-950 font-bold px-6 py-4 rounded-2xl shadow-lg shadow-gold-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5 flex-shrink-0" />
              <span>Download Brosur & Persyaratan Lengkap</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
