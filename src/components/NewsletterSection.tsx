import React, { useState } from 'react';
import { User, Mail, Smartphone, ArrowRight, Check } from 'lucide-react';

interface NewsletterSectionProps {
  className?: string;
  onOpenTerms?: () => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ 
  className = '',
  onOpenTerms 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg('Por favor, informe seu e-mail.');
      return;
    }
    if (!acceptedTerms) {
      setErrorMsg('Por favor, aceite os termos de uso para continuar.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setAcceptedTerms(false);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4500);
  };

  return (
    <div 
      id="newsletter-curadoria"
      aria-label="Assine nossa Newsletter Jurídica"
      className={`relative w-full bg-[#071824] text-white overflow-hidden rounded-2xl border border-slate-800/80 shadow-2xl ${className}`}
    >
      {/* Background with subtle gradient & Smartphone Image on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071824] via-[#091d2b] to-[#0c2537] z-0" />

      {/* Right side visual: Hands with Smartphone */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full sm:w-3/5 lg:w-[52%] pointer-events-none z-0 opacity-40 sm:opacity-85 lg:opacity-95"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 22%, rgba(0,0,0,1) 58%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 22%, rgba(0,0,0,1) 58%)',
        }}
      >
        <img 
          src="./newsletter-smartphone.jpg" 
          alt="Curadoria Jurídica no Smartphone"
          className="w-full h-full object-cover object-center lg:object-right select-none"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/newsletter-smartphone.jpg';
          }}
        />
        {/* Subtle overlay vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071824]/80 via-transparent to-[#071824]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14">
        <div className="w-full max-w-xl lg:max-w-2xl space-y-6">
          
          {/* Main Heading in Cyan */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight text-[#00BCD4] uppercase leading-[1.18] font-sans">
              A melhor curadoria do<br className="hidden sm:inline" /> mundo jurídico em seu email
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            
            {/* Field 1: Nome (Full width) */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#00BCD4]">
                <User className="w-5 h-5 text-[#00BCD4]" strokeWidth={2.2} />
              </div>
              <input 
                type="text"
                id="newsletter-name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
                className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-white text-slate-900 rounded-lg placeholder:text-slate-400 text-sm sm:text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#00BCD4] shadow-sm transition-all"
              />
            </div>

            {/* Row 2: E-mail and Telefone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              
              {/* Field 2: E-mail */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#00BCD4]">
                  <Mail className="w-5 h-5 text-[#00BCD4]" strokeWidth={2.2} />
                </div>
                <input 
                  type="email"
                  id="newsletter-email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-white text-slate-900 rounded-lg placeholder:text-slate-400 text-sm sm:text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#00BCD4] shadow-sm transition-all"
                />
              </div>

              {/* Field 3: Telefone */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#00BCD4]">
                  <Smartphone className="w-5 h-5 text-[#00BCD4]" strokeWidth={2.2} />
                </div>
                <input 
                  type="tel"
                  id="newsletter-phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefone"
                  className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-white text-slate-900 rounded-lg placeholder:text-slate-400 text-sm sm:text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#00BCD4] shadow-sm transition-all"
                />
              </div>

            </div>

            {/* Checkbox Termos de uso */}
            <div className="flex items-start gap-2.5 pt-1">
              <input 
                type="checkbox"
                id="newsletter-terms"
                name="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded-sm border-slate-400 text-[#00BCD4] focus:ring-[#00BCD4] bg-slate-800/80 cursor-pointer shrink-0"
              />
              <label 
                htmlFor="newsletter-terms" 
                className="text-xs sm:text-[13px] text-slate-300 select-none cursor-pointer leading-snug"
              >
                Autorizo o envio das minhas informações de acordo com os{' '}
                <span 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onOpenTerms) onOpenTerms();
                  }}
                  className="underline text-slate-200 hover:text-white cursor-pointer transition-colors"
                >
                  Termos de uso
                </span>
                .
              </label>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <p className="text-xs text-rose-400 font-medium pt-0.5 animate-in fade-in">
                {errorMsg}
              </p>
            )}

            {/* Success Feedback */}
            {isSubmitted && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/40 rounded-lg p-3 animate-in fade-in">
                <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Obrigado! Sua inscrição na curadoria jurídica foi confirmada com sucesso.</span>
              </div>
            )}

            {/* Submit Button: Assinar Newsletter → */}
            <div className="pt-2">
              <button
                type="submit"
                id="btn-subscribe-newsletter"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0e1f2d]/90 hover:bg-[#152e42] text-slate-200 hover:text-white font-bold text-sm sm:text-[15px] border border-slate-700/80 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <span>Assinar Newsletter</span>
                <ArrowRight className="w-4 h-4 text-slate-300 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};
