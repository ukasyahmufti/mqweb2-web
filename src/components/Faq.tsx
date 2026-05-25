import { useState } from 'react';
import { ChevronDown, FileText, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { faqsData } from '../data';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<string | null>('faq1');

  const steps = [
    "Hubungi kami via WhatsApp atau isi form pendaftaran",
    "Konsultasi gratis mengenai program dan persiapan",
    "Buat paspor (satu-satunya dokumen yang perlu Anda urus)",
    "Kami urus semua pemberkasan, visa, dan keberangkatan",
    "Berangkat dengan pendampingan penuh hingga Kairo"
  ];

  const handleWhatsappConsul = () => {
    window.open("https://wa.me/6281367816714", "_blank");
  };

  return (
    <section id="faq" className="py-24 bg-[#2c060b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - FAQ Accordions */}
          <div className="lg:col-span-7">
            <span className="text-amber-200 font-sans text-xs font-bold tracking-widest uppercase mb-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
              FAQ
            </span>
            <h3 className="font-serif text-3xl lg:text-4.5xl font-extrabold text-white leading-tight mb-4">
              Pertanyaan yang <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400">
                Sering Ditanyakan
              </span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mb-12" />

            <div className="space-y-4">
              {faqsData.map((faq) => {
                const isOpen = openIdx === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                      isOpen
                        ? 'border-gold-400/30 bg-white/[0.04]'
                        : 'border-white/10 bg-white/[0.02]'
                    }`}
                  >
                    {/* Header Item click bar */}
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : faq.id)}
                      className={`flex justify-between items-center gap-6 w-full text-left p-6 font-sans font-bold text-sm lg:text-base cursor-pointer transition-colors ${
                        isOpen
                          ? 'bg-white/5 text-amber-200'
                          : 'hover:bg-white/[0.04] text-white/90'
                      }`}
                    >
                      <span>{faq.question}</span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'bg-gold-500 text-maroon-950 rotate-180' : 'bg-white/10 text-white'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Expandable Body paragraph panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="p-6 bg-black/20 text-white/80 text-sm lg:text-base leading-relaxed border-t border-white/5 font-sans">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Easy onboarding Roadmap Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 glass-card-heavy rounded-3xl p-8 sticky lg:top-28"
          >
            <h4 className="font-serif text-xl font-bold mb-2 text-gold-400">Langkah Mudah Mendaftar</h4>
            <p className="text-white/60 text-sm mb-8 font-sans">
              Hanya perlu paspor — kami urus sisanya secara terstruktur!
            </p>

            <div className="space-y-6 mb-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 text-maroon-950 font-sans font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed pt-1 font-sans">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Brochure Download Link inside Widget */}
            <a
              href="https://drive.google.com/drive/folders/13M6yNgYhegFC-V41aYAzA4MP0WPptBu?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 mb-4 transition-all duration-300"
            >
              <FileText className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div className="text-left font-sans">
                <strong className="block text-white text-sm">Download Brosur Lengkap</strong>
                <span className="text-white/50 text-[0.7rem] uppercase tracking-wider font-semibold">Persyaratan & Informasi Program</span>
              </div>
            </a>

            {/* Direct WhatsApp Consultation click button */}
            <button
              onClick={handleWhatsappConsul}
              className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-maroon-950 font-bold px-6 py-4 rounded-2xl shadow-lg shadow-gold-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              Daftar Sekarang via WhatsApp
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
