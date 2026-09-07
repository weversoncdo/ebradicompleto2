import React, { useState } from 'react';
import { FAQS } from '../data/testimonials';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b36] tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-sm text-slate-600">
            Tudo o que você precisa saber sobre reconhecimento do MEC, início das aulas, metodologia online e formas de pagamento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all ${
                  isOpen
                    ? 'border-red-600/40 bg-slate-50/50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0b1b36]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform ${
                    isOpen ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Assistance */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-xs sm:text-sm text-slate-700">
            Ainda ficou com alguma dúvida sobre seu curso ou matrícula?
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="tel:08000069000"
              className="text-xs font-bold text-[#0b1b36] hover:text-red-600 transition-colors"
            >
              Ligue grátis: 0800 006 9000
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20EBRADI."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              Falar no WhatsApp com Consultor
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
