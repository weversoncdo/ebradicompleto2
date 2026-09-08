import React from 'react';
import { X, ShieldCheck, Mail, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="bg-[#0b1b36] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-cinzel text-white">
                Canal de Privacidade & LGPD
              </h3>
              <p className="text-xs text-slate-300">
                Escola Brasileira de Direito • Grupo Ânima Educação
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5 text-slate-700 text-xs sm:text-sm max-h-[70vh] overflow-y-auto">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-[#0b1b36] flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-600" />
              Compromisso com a Proteção de Dados (Lei 13.709/2018)
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              A EBRADI - Escola Brasileira de Direito trata os dados pessoais de seus alunos, visitantes e colaboradores com total transparência, confidencialidade e segurança, sob as diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD).
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-[#0b1b36] text-sm">Direitos do Titular de Dados:</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Confirmação da existência de tratamento e acesso aos dados pessoais.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Correção de dados incompletos, inexatos ou desatualizados.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Anonimização, bloqueio ou eliminação de dados desnecessários.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Revogação de consentimento e informações sobre compartilhamento de dados.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="font-bold text-[#0b1b36] flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-600" />
              <span>Encarregado de Proteção de Dados (DPO)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Para exercer seus direitos ou tirar dúvidas sobre o tratamento de dados pessoais, entre em contato direto com o nosso Comitê de Privacidade:
            </p>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs font-mono font-semibold text-[#0b1b36]">
              privacidade@ebradi.com.br
            </div>
            <p className="text-[11px] text-slate-500">
              Prazo de resposta padrão em conformidade com as deliberações da ANPD (Autoridade Nacional de Proteção de Dados).
            </p>
          </div>

          <div className="text-[11px] text-slate-500 leading-normal">
            <strong>Controlador:</strong> Escola Brasileira de Direito.<br />
            CNPJ 05.648.257/0031-93 - Rua Taquari, 546 - Mooca, São Paulo/SP - CEP 03166-000.<br />
            © Copyright 2026 EBRADI. Todos os direitos reservados.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#0b1b36] hover:bg-[#162d59] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Fechar Canal
          </button>
        </div>
      </div>
    </div>
  );
};
