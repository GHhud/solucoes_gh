import Navbar from './modules/navigation/components/Navbar';
import Hero from './modules/hero/components/Hero';
import PillarsSection from './modules/pillars/components/PillarsSection';
import ServicesSection from './modules/services/components/ServicesSection';
import ProcessSection from './modules/process/components/ProcessSection';
import UseCasesSection from './modules/use-cases/components/UseCasesSection';
import Footer from './modules/footer/components/Footer';

export default function App() {
  const handleContact = () => {
    window.open('https://wa.me/5521991083870?text=Ol%C3%A1%21%20Quero%20falar%20com%20um%20especialista%20da%20Growth%20Hub.', '_blank', 'noopener');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC] font-sans selection:bg-[#8B5CF6] selection:text-white">
      <Navbar onContact={handleContact} />
      <Hero onContact={handleContact} />
      <PillarsSection />
      <ServicesSection onContact={handleContact} />
      <section id="processo"><ProcessSection /></section>
      <section id="casos"><UseCasesSection /></section>
      <Footer />
    </div>
  );
}
