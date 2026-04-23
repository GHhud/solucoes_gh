import BrandLogo from '../../../components/ui/BrandLogo';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#050508] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <BrandLogo size="lg" />
        <p className="text-sm text-[#94A3B8]">
          © {new Date().getFullYear()} Growth Hub. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
