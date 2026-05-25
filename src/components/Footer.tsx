import React from 'react';
import { Youtube, Instagram, Facebook, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  const socialControls = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://web.facebook.com/markazqurancenter",
      title: "Facebook"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/markaz.mesir/",
      title: "Instagram"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://www.youtube.com/@markaz_quran_ibnul_jazary",
      title: "YouTube"
    }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="footer" className="bg-[#2c060b] border-t border-white/10 pt-20 pb-8 text-white/70 text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
        
        {/* Brand column info */}
        <div className="lg:col-span-4 text-left">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://studitimurtengah.com/wp-content/uploads/2024/09/Logo-Mediator-150x150-1.webp"
              alt="Markaz Qur'an Logo"
              referrerPolicy="no-referrer"
              className="h-12 w-12 rounded-full object-contain border border-gold-400"
            />
            <div>
              <h4 className="font-serif text-lg font-bold text-white leading-none">Markaz Qur'an</h4>
              <span className="text-[0.63rem] font-sans font-semibold text-gold-400 uppercase tracking-widest mt-1 block">
                Ibnul Jazary
              </span>
            </div>
          </div>
          <p className="text-white/45 text-xs lg:text-sm leading-relaxed mb-6 max-w-sm">
            Mediator Terpercaya Pengiriman Pelajar Timur Tengah. Memiliki kredensial ijin kemitraan pendampingan formal & terdaftar resmi di Kemenkumham RI serta Kementerian Agama RI.
          </p>

          <div className="flex gap-3">
            {socialControls.map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                title={soc.title}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400 transition-all duration-300 hover:-translate-y-1"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links columns */}
        <div className="lg:col-span-2 text-left">
          <h5 className="text-[0.72rem] font-bold text-gold-400 uppercase tracking-widest mb-6 border-l-2 border-gold-400 pl-3">
            Navigasi
          </h5>
          <ul className="space-y-3.5">
            <li><a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-gold-400 transition-colors">Tentang Mahad</a></li>
            <li><a href="#programs" onClick={(e) => handleScrollTo(e, '#programs')} className="hover:text-gold-400 transition-colors">Program Studi</a></li>
            <li><a href="#requirements" onClick={(e) => handleScrollTo(e, '#requirements')} className="hover:text-gold-400 transition-colors">Persyaratan</a></li>
            <li><a href="#reasons" onClick={(e) => handleScrollTo(e, '#reasons')} className="hover:text-gold-400 transition-colors">9 Keunggulan</a></li>
            <li><a href="#comparison" onClick={(e) => handleScrollTo(e, '#comparison')} className="hover:text-gold-400 transition-colors">Perbandingan</a></li>
            <li><a href="#testimonials" onClick={(e) => handleScrollTo(e, '#testimonials')} className="hover:text-gold-400 transition-colors">Testimoni</a></li>
            <li><a href="#faq" onClick={(e) => handleScrollTo(e, '#faq')} className="hover:text-gold-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Programs section list */}
        <div className="lg:col-span-2 text-left">
          <h5 className="text-[0.72rem] font-bold text-gold-400 uppercase tracking-widest mb-6 border-l-2 border-gold-400 pl-3">
            Program Studi
          </h5>
          <ul className="space-y-3.5">
            <li><a href="#programs" onClick={(e) => handleScrollTo(e, '#programs')} className="hover:text-gold-400 transition-colors">SMP Al-Azhar</a></li>
            <li><a href="#programs" onClick={(e) => handleScrollTo(e, '#programs')} className="hover:text-gold-400 transition-colors">SMA Al-Azhar</a></li>
            <li><a href="#programs" onClick={(e) => handleScrollTo(e, '#programs')} className="hover:text-gold-400 transition-colors">Universitas Al-Azhar</a></li>
            <li>
              <a
                href="https://kuliahturkiye.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-gold-400 transition-colors text-white/80 font-semibold"
              >
                Studi di Turki
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/13M6yNgYhegFC-V41aYAzA4MP0WPptBu?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors text-white/50"
              >
                Download Brosur PDF
              </a>
            </li>
          </ul>
        </div>

        {/* Coordinates contact points */}
        <div className="lg:col-span-4 text-left space-y-5">
          <h5 className="text-[0.72rem] font-bold text-gold-400 uppercase tracking-widest mb-6 border-l-2 border-gold-400 pl-3">
            Hubungi Kami
          </h5>
          
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-white text-xs mb-1">Kantor Yayasan</strong>
              <span className="text-white/45 text-xs font-sans leading-relaxed">
                Graha Pena Residence Blok E4, Jl. Kampung Pajeleran Gunung, Cibinong, Bogor 16913
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-white text-xs mb-1">Nara Hubung / SMS / Call</strong>
              <span className="text-white/45 text-xs font-sans">
                +62-813-6781-6714 <br /> +62-878-7612-5539
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-white text-xs mb-1">E-mail Resmi</strong>
              <span className="text-white/45 text-xs font-sans">
                markazquran.markazqu@gmail.com
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-white text-xs mb-1">Jam Operasional Kantor</strong>
              <span className="text-white/45 text-xs font-sans">
                Senin–Jum'at: 09:00–17:00 <br /> Sabtu–Ahad: 09:00–16:00
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 text-center">
        <p>2026 © Copyrights Markaz Quran Ibnul Jazary. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://maps.app.goo.gl/tEEpNb67jpQsugJD7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            Kunjungi Lokasi Google Maps
          </a>
          <a
            href="https://kuliahturkiye.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            Informasi Studi Turki
          </a>
        </div>
      </div>
    </footer>
  );
}
