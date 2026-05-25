import { Shield, Award, Clock, Users, DollarSign } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Shield className="w-5 h-5 text-gold-400" />,
      text: "Terdaftar Kemenkumham"
    },
    {
      icon: <Award className="w-5 h-5 text-gold-400" />,
      text: "Terdaftar Kemenag RI"
    },
    {
      icon: <Clock className="w-5 h-5 text-gold-400" />,
      text: "Pemberangkatan 2026/2027"
    },
    {
      icon: <Users className="w-5 h-5 text-gold-400" />,
      text: "Pendampingan Penuh Cairo"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-gold-400" />,
      text: "Biaya Terjangkau"
    }
  ];

  return (
    <div className="bg-[#2c060b]/50 backdrop-blur-xl border-t border-b border-white/10 py-6 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-y-4 gap-x-8 md:gap-x-12">
        {trustItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
              {item.icon}
            </div>
            <span className="text-white/80 font-sans text-sm font-semibold tracking-wide">
              {item.text}
            </span>
            {idx < trustItems.length - 1 && (
              <div className="hidden lg:block w-[1px] h-6 bg-gold-500/20 ml-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
