import { Program, Reason, ComparisonItem, Testimonial, FaqItem } from './types';

export const programsData: Program[] = [
  {
    id: 'smp',
    num: '01',
    icon: '🏫',
    title: "SMP Al Azhar Kairo Mesir",
    description: "Program untuk lulusan Sekolah Dasar yang ingin melanjutkan ke Mahad Bu'uts Al Islamiyyah Al Azhar tingkat SMP/Tsanawiy.",
    ageBadge: "Usia 12+ Tahun"
  },
  {
    id: 'sma',
    num: '02',
    icon: '🎒',
    title: "SMA Al Azhar Kairo Mesir",
    description: "Lulusan SMP yang ingin melanjutkan ke Mahad Bu'uts Al Islamiyyah Al Azhar tingkat SMA/Aly — Jurusan Ilmy (Sains) & Jurusan Adaby (Agama/Sosial).",
    ageBadge: "Jurusan Pilihan"
  },
  {
    id: 'univ',
    num: '03',
    icon: '🕌',
    title: "Universitas Al Azhar Kairo Mesir",
    description: "Lulusan SMA/Aly yang ingin melanjutkan studi di Universitas Al Azhar Kairo Mesir. Program Mahad menjadi jalan termudah tanpa tes seleksi tambahan.",
    ageBadge: "Tanpa Tes Seleksi"
  }
];

export const reasonsData: Reason[] = [
  {
    id: 'reason1',
    num: 'Alasan 01',
    image: 'https://studitimurtengah.com/wp-content/uploads/2024/09/Untitled-design-1.webp',
    altText: "Ulama tingkat dunia",
    text: "Diajar oleh ulama tingkat dunia di Universitas & Mahad Al-Azhar"
  },
  {
    id: 'reason2',
    num: 'Alasan 02',
    image: 'https://studitimurtengah.com/wp-content/uploads/2024/09/5.webp',
    altText: "Bahasa Arab Native",
    text: "Belajar bahasa Arab interaktif secara langsung dengan ulama Native"
  },
  {
    id: 'reason3',
    num: 'Alasan 03',
    image: 'https://studitimurtengah.com/wp-content/uploads/2024/09/7.webp',
    altText: "Rekomendasi S1 Timur Tengah",
    text: "Rekomendasi terbaik bagi yang ingin melanjutkan program S1 langsung di Timur Tengah"
  },
  {
    id: 'reason4',
    num: 'Alasan 04',
    image: 'https://studitimurtengah.com/wp-content/uploads/2024/09/Untitled-design-2.webp',
    altText: "Akselerasi",
    text: "Bisa lulus jauh lebih cepat karena program akselerasi yang dinamis"
  },
  {
    id: 'reason5',
    num: 'Alasan 05',
    image: 'https://studitimurtengah.com/wp-content/uploads/2024/09/3-1.webp',
    altText: "Lingkungan Internasional",
    text: "Lingkungan kosmopolitan internasional menambah wawasan persaudaraan Islam"
  },
  {
    id: 'reason6',
    num: 'Alasan 06',
    image: 'https://studitimurtengah.com/wp-content/uploads/2024/09/6.webp',
    altText: "Gratis Biaya Pendidikan",
    text: "Seluruh biaya pendidikan akademis di Al-Azhar Kairo 100% dibebaskan"
  },
  {
    id: 'reason7',
    num: 'Alasan 07',
    image: 'https://studitimurtengah.com/wp-content/uploads/2024/09/Untitled-design5.webp',
    altText: "Biaya Hidup Terjangkau",
    text: "Biaya hidup dasar (pangan/papan) di Mesir relatif ramah dan sangat terjangkau"
  },
  {
    id: 'reason8',
    num: 'Alasan 08',
    image: 'https://studitimurtengah.com/wp-content/uploads/2024/09/8.webp',
    altText: "Asrama Pelajar Indonesia",
    text: "Tersedia fasilitas asrama yang aman & kondusif khusus pelajar dari Indonesia"
  },
  {
    id: 'reason9',
    num: 'Alasan 09',
    image: 'https://studitimurtengah.com/wp-content/uploads/2024/09/9.webp',
    altText: "Masuk Univ Al-Azhar Tanpa Tes",
    text: "Melisensi jalur masuk ke Universitas bergengsi Al-Azhar Cairo bebas tes"
  }
];

export const comparisonData: ComparisonItem[] = [
  {
    feature: "Lembaga Resmi Terdaftar Kemenkumham RI",
    hasMarkaz: true,
    hasOther: false
  },
  {
    feature: "Lembaga Berizin & Terdaftar Kementerian Agama RI",
    hasMarkaz: true,
    hasOther: false
  },
  {
    feature: "Prakiraan Biaya Keberangkatan Terjangkau & Transparan",
    hasMarkaz: true,
    hasOther: false
  },
  {
    feature: "Proses Praktis: Peserta Hanya Perlu Mengurus Paspor Mandiri",
    hasMarkaz: true,
    hasOther: false
  },
  {
    feature: "Garansi/Jaminan Keberangkatan dengan Kuota Pasti",
    hasMarkaz: true,
    hasOther: false
  },
  {
    feature: "Full Pendampingan Penerbangan dari Indonesia s.d. Tiba di Kairo",
    hasMarkaz: true,
    hasOther: false
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'testi1',
    stars: 5,
    quote: "Syukur alhamdulillah, saya Moh. Faqih bisa belajar di negeri Kinanah atau di negera Mesir sini melalui mediator Markaz Qur'an. Perkiraan saya itu cuman sekedar bercanda saja, dan ternyata Allah SWT kabulkan perkataan tersebut. Dengan melalui jalur mediator Markaz Qur'an saya bisa melanjutkan study saya di negeri Kinanah ini.",
    name: "Mohammad Faqih",
    role: "Pelajar Mesir Asal Sulawesi",
    avatar: "https://studitimurtengah.com/wp-content/uploads/2024/09/WhatsApp-Image-2022-04-03-at-10.00.36-768x768-1.webp",
    isFeatured: true
  },
  {
    id: 'testi2',
    stars: 5,
    quote: "Terimakasih Markaz Qur'an telah membantu perjalanan studi kami ke Mesir dengan lancar dan aman. Proses yang mudah dan pendampingan yang luar biasa.",
    name: "Alumni Markaz Qur'an",
    role: "Pelajar Mahad Al-Azhar",
    avatar: "https://studitimurtengah.com/wp-content/uploads/2024/09/WhatsApp-Image-2022-04-04-at-15.09.14-768x768-1.webp"
  },
  {
    id: 'testi3',
    stars: 5,
    quote: "Sangat profesional dan amanah. Anak kami bisa berangkat dengan aman, terbimbing dari Indonesia hingga tiba di Cairo dengan baik.",
    name: "Orang Tua Alumni",
    role: "Wali Peserta Markaz Qur'an",
    avatar: "https://studitimurtengah.com/wp-content/uploads/2024/09/WhatsApp-Image-2022-03-28-at-16.47.26-768x768-1.webp"
  }
];

export const galleryImages = [
  'https://studitimurtengah.com/wp-content/uploads/2024/09/IMG-20240520-WA0043-scaled-1.webp',
  'https://studitimurtengah.com/wp-content/uploads/2024/09/IMG-20240520-WA0035-scaled-1.webp',
  'https://studitimurtengah.com/wp-content/uploads/2024/09/IMG-20240520-WA0044-scaled-1.webp',
  'https://studitimurtengah.com/wp-content/uploads/2024/09/IMG-20240520-WA0036-scaled-1.webp',
  'https://studitimurtengah.com/wp-content/uploads/2024/09/IMG-20240520-WA0020-scaled-1.webp',
  'https://studitimurtengah.com/wp-content/uploads/2024/09/IMG-20240520-WA0023-scaled-1.webp'
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq1',
    question: "Apa itu Ma'had Al Azhar / Ma'had Bu'uts Al Islamy?",
    answer: "Lembaga pendidikan resmi tingkat menengah di bawah naungan langsung Al Azhar As-Syarif Cairo Egypt. Program menargetkan pendidikan setaraf SMP (Tsanawiyah), SMA (Aliyah/Aly), serta berperan sangat krusial sebagai jembatan pembinaan khusus untuk persiapan masuk Universitas Al Azhar Kairo."
  },
  {
    id: 'faq2',
    question: "Siapa saja yang diperkenankan untuk mendaftar?",
    answer: "Seluruh muslim dan muslimah di Indonesia yang berusia di antara 12 sampai dengan 30 tahun, baik pria maupun wanita. Berdasarkan tata tertib formal, persyaratan akademis minimum adalah telah dinyatakan lulus program Sekolah Dasar (SD) sederajat."
  },
  {
    id: 'faq3',
    question: "Apakah diperbolehkan mendaftar bagi lulusan SMA atau mahasiswa aktif?",
    answer: "Sangat diperbolehkan. Ma'had Bu'uts ini bertindak sebagai jalur alternatif (mempasilitasi bypass) paling direkomendasikan bagi siswa/mahasiswa yang bercita-cita melanjutkan studi formal S1 di Universitas Al Azhar Kairo Mesir secara mandiri dan dibebaskan dari ujian seleksi nasional Kemenag yang sangat ketat."
  },
  {
    id: 'faq4',
    question: "Bagaimana jika calon siswa belum memiliki kompetensi dasar bahasa Arab?",
    answer: "Hampir seluruh kandidat yang kami berangkatkan memulai studi dari tahap awal atau belum menguasai bahasa Arab secara fasih. Al-Azhar mengakomodasi hal tersebut dengan menempatkan siswa baru pada bimbingan intensif 1–6 bulan pertama di 'Dirosah Khossoh' (kelas penyetaraan/persiapan) guna mengintensifkan porsi pendalaman bahasa Arab taktis, hafalan Al-Qur'an, dan dasar wawasan Islam."
  },
  {
    id: 'faq5',
    question: "Berapa lama estimasi masa studi di Ma'had?",
    answer: "Lamanya studi bergantung sepenuhnya pada ikhtiar, tingkat hafalan, dan performa akademis masing-masing siswa. Meskipun struktur formal aslinya 6 tahun, rata-rata pelajar asal Indonesia yang tekun dapat menyelesaikan ujian kenaikan kelas (akselerasi berulang) dalam kurun waktu 1 hingga 3 tahun saja, lalu berhak langsung bertransisi ke jenjang S1 Universitas Al-Azhar."
  },
  {
    id: 'faq6',
    question: "Apakah program sekolah di Ma'had Bu'uts dipungut biaya?",
    answer: "Pendidikan akademis formal di Ma'had Al Azhar dibebaskan sepenuhnya dari uang SPP atau biaya pendaftaran sekolah (Murni GRATIS) sejak awal diterimanya siswa hingga hari kelulusan. Universitas Al-Azhar juga kerap menyalurkan program beasiswa penunjang berupa asrama panti gratis dan/atau tunjangan uang saku bulanan."
  },
  {
    id: 'faq7',
    question: "Apakah estimasi biaya operasional hidup bulanan di Mesir terlampau mahal?",
    answer: "Sama sekali tidak. Menariknya, Mesir menduduki jajaran salah satu negara dengan indeks pengeluaran pokok harian paling terjangkau sedunia karena subsidi pangan melimpah. Biaya akomodasi hunian kolektif bersama, konsumsi harian, dan transportasi lokal berkisar sangat terjangkau bagi kantong pelajar Indonesia."
  },
  {
    id: 'faq8',
    question: "Apakah dimungkinkan untuk memperjuangkan beasiswa tambahan selama studi berlangsung?",
    answer: "Sangat dimungkinkan! Apabila siswa menunjukkan raihan indeks prestasi memuaskan di tahun pertama (minimal Jayyid Jiddan atau Mumtaz/Cumlaude), siswa dipersilakan melayangkan permohonan beasiswa penuh melalui jalur formal ke berbagai filantropi Islam kredibel di Mesir seperti Bait al-Zakat wa al-Shadaqat (Lembaga Zakat Al-Azhar), WAMY, atau lembaga kemanusiaan internasional lainnya."
  }
];
