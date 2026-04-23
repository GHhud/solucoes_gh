import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../../../components/ui/Button';
import BrandLogo from '../../../components/ui/BrandLogo';

export default function Navbar({ onContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-40 mx-auto max-w-7xl rounded-2xl transition-[background-color,border-color,box-shadow,padding] duration-300 ${
        scrolled
          ? 'glass-strong shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] py-3'
          : 'bg-transparent border border-transparent py-4'
      }`}
      aria-label="Principal"
    >
      <div className="px-5 md:px-6 flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer opacity-100 hover:opacity-85 transition-opacity duration-200"
          aria-label="Growth Hub — ir para o topo"
        >
          <BrandLogo size="md" />
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#CBD5E1]">
          <a href="#solucoes" className="hover:text-white transition-colors duration-200">Soluções</a>
          <a href="#processo" className="hover:text-white transition-colors duration-200">Processo</a>
          <a href="#casos" className="hover:text-white transition-colors duration-200">Casos</a>
          <Button variant="secondary" size="sm" onClick={onContact}>
            Falar com Especialista
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 mx-2 p-5 glass-strong rounded-2xl flex flex-col gap-4">
          <a href="#solucoes" onClick={() => setMobileOpen(false)} className="text-[#CBD5E1] hover:text-white transition-colors duration-200">Soluções</a>
          <a href="#processo" onClick={() => setMobileOpen(false)} className="text-[#CBD5E1] hover:text-white transition-colors duration-200">Processo</a>
          <a href="#casos" onClick={() => setMobileOpen(false)} className="text-[#CBD5E1] hover:text-white transition-colors duration-200">Casos</a>
          <Button variant="primary" size="md" onClick={() => { setMobileOpen(false); onContact?.(); }}>
            Falar com Especialista
          </Button>
        </div>
      )}
    </nav>
  );
}
