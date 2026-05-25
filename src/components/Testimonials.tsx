import { useState } from 'react';
import { Quote, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData, galleryImages } from '../data';

export default function Testimonials() {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const nextImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx + 1) % galleryImages.length);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#2c060b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="max-w-2xl text-left mb-16">
          <span className="text-amber-200 font-sans text-xs font-bold tracking-widest uppercase mb-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
            Testimoni
          </span>
          <h3 className="font-serif text-3xl lg:text-4.5xl font-extrabold text-white leading-tight mb-4">
            Kata Mereka yang <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400">
              Telah Berangkat
            </span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20 block">
          {testimonialsData.map((testi) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl p-8 relative flex flex-col justify-between border ${
                testi.isFeatured
                  ? 'lg:col-span-7 bg-gradient-to-br from-amber-500/10 via-[#2c060b]/40 to-[#410b13]/85 backdrop-blur-xl border-gold-400/25 shadow-2xl text-white'
                  : 'lg:col-span-5 glass-card text-white'
              }`}
            >
              {/* Massive stylized Quote Backdrop mark */}
              <Quote
                className="absolute top-6 right-8 w-16 h-16 opacity-10 pointer-events-none text-gold-400"
              />

              <div>
                {/* 5 Stars Indicator */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testi.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Quote Quote Text block */}
                <p
                  className="font-serif italic text-sm md:text-base leading-relaxed mb-8 text-white/90"
                >
                  "{testi.quote}"
                </p>
              </div>

              {/* Author footer card widget */}
              <div
                className={`flex items-center gap-4 pt-6 border-t ${
                  testi.isFeatured ? 'border-white/15' : 'border-white/10'
                }`}
              >
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400/40"
                />
                <div>
                  <h5
                    className="font-sans font-bold text-sm text-white"
                  >
                    {testi.name}
                  </h5>
                  <p
                    className="text-xs text-gold-200/60"
                  >
                    {testi.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Image Grid Gallery */}
        <div className="mt-16">
          <h4 className="font-serif text-xl font-bold text-white mb-6 text-center lg:text-left">
            Galeri Dokumentasi Kegiatan Siswa di Kairo Mesir
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImageIdx(idx)}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-white/10 hover:border-gold-400/30 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Kegiatan pelajar ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal overlay view */}
      <AnimatePresence>
        {selectedImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIdx(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImageIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left navigation arrow controller */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full cursor-pointer transition-colors z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right navigation arrow controller */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full cursor-pointer transition-colors z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] flex justify-center items-center rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={galleryImages[selectedImageIdx]}
                alt="Enlarged Document"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
