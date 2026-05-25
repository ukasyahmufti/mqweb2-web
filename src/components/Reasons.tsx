import { motion } from 'motion/react';
import { reasonsData } from '../data';

export default function Reasons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="reasons" className="py-24 bg-[#2c060b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Title section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-amber-200 font-sans text-xs font-bold tracking-widest uppercase mb-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
            Keunggulan Kami
          </span>
          <h3 className="font-serif text-3xl lg:text-4.5xl font-extrabold text-white leading-tight mb-4">
            9 Alasan Memilih <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400">
              Mahad Al-Azhar Kairo
            </span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mx-auto" />
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasonsData.map((reason, idx) => (
            <motion.div
              key={reason.id}
              variants={cardVariants}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-default"
            >
              {/* Image with sleek scale transition */}
              <img
                src={reason.image}
                alt={reason.altText}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Dark Overlay with Frosted Backdrop blur */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent backdrop-blur-[1px] transition-all duration-300 z-10" />

              {/* Custom border highlight on hover */}
              <div className="absolute inset-0 border-[2px] border-gold-400/0 group-hover:border-gold-400/40 transition-all duration-300 rounded-3xl z-30 pointer-events-none" />

              {/* Content text */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <span className="font-serif text-xs font-bold text-gold-400 tracking-widest uppercase mb-2">
                  {reason.num}
                </span>
                <p className="text-white font-sans text-sm md:text-base font-semibold leading-relaxed tracking-wide shadow-sm">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
