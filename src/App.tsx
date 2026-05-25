import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Programs from './components/Programs';
import Requirements from './components/Requirements';
import Reasons from './components/Reasons';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  return (
    <div className="bg-[#2c060b] font-sans antialiased text-[#f9f0d7] min-h-screen relative selection:bg-gold-500/30 selection:text-white">
      {/* Premium background grain texture simulation */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-repeat bg-center z-50 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Programs />
      <Requirements />
      <Reasons />
      <Comparison />
      <Testimonials />
      <Faq />
      <RegisterForm />
      <Footer />
      <FloatingWA />
    </div>
  );
}
