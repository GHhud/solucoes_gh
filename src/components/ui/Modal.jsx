import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, children, labelledBy }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in" role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
      <div className="relative rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up bg-[#0A0A0F] border border-white/15">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors duration-200 z-10 cursor-pointer"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
