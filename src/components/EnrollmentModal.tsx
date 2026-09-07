import React, { useState } from 'react';
import { Course } from '../types';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  Barcode, 
  QrCode, 
  ArrowRight,
  Sparkles,
  Lock
} from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse: Course | null;
  discountPercentage?: number;
  discountLabel?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  selectedCourse,
  discountPercentage = 0,
  discountLabel,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    oab: '',
    paymentMethod: 'credit_card',
    acceptTerms: true,
  });

  if (!isOpen) return null;

  const currentCourse = selectedCourse;
  const originalPrice = currentCourse ? currentCourse.originalPrice : 199.90;
  const effectiveMonthly = discountPercentage > 0
    ? originalPrice * (1 - discountPercentage / 100)
    : (currentCourse ? currentCourse.promotionalPrice : 199.90);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleResetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="bg-[#0b1b36] text-white p-6 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1 pr-8">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Matrícula Oficial 100% Online • EBRADI
            </span>
            <h3 className="text-xl font-bold text-white">
              {currentCourse ? currentCourse.title : 'Inscrição de Matrícula'}
            </h3>
            {discountLabel && (
              <span className="inline-block text-[11px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded mt-1">
                Bolsa Ativa: {discountLabel} ({discountPercentage}% OFF)
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Value Preview */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Condição especial garantida:</span>
              <div className="text-right">
                <span className="font-extrabold text-base text-[#0b1b36]">
                  {currentCourse?.installments || 18}x de R$ {effectiveMonthly.toFixed(2).replace('.', ',')}
                </span>
                <span className="block text-[10px] text-emerald-700 font-semibold">
                  Sem taxa de matrícula
                </span>
              </div>
            </div>

            {/* Fields */}
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Dra. Mariana Silva Santos"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-red-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    E-mail Acadêmico / Pessoal *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="advogado@exemplo.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-red-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-red-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    CPF (Para emissão de diploma/certificado) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-red-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nº OAB (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: SP 123456"
                    value={formData.oab}
                    onChange={(e) => setFormData({ ...formData, oab: e.target.value })}
                    className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-red-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">
                  Forma de Pagamento Preferida
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center gap-1 ${
                    formData.paymentMethod === 'credit_card'
                      ? 'bg-red-50 border-red-600 text-red-700 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'credit_card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'credit_card' })}
                      className="hidden"
                    />
                    <CreditCard className="w-4 h-4" />
                    <span className="text-[11px]">Cartão Recorrente</span>
                  </label>

                  <label className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center gap-1 ${
                    formData.paymentMethod === 'pix'
                      ? 'bg-red-50 border-red-600 text-red-700 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'pix'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'pix' })}
                      className="hidden"
                    />
                    <QrCode className="w-4 h-4" />
                    <span className="text-[11px]">Pix à Vista (-10%)</span>
                  </label>

                  <label className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center gap-1 ${
                    formData.paymentMethod === 'boleto'
                      ? 'bg-red-50 border-red-600 text-red-700 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'boleto'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'boleto' })}
                      className="hidden"
                    />
                    <Barcode className="w-4 h-4" />
                    <span className="text-[11px]">Boleto Mensal</span>
                  </label>
                </div>
              </div>

              {/* Agreement */}
              <label className="flex items-start gap-2 pt-2 text-[11px] text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                  className="mt-0.5 text-red-600 focus:ring-red-600 rounded"
                />
                <span>
                  Declaro que li e concordo com os termos de matrícula e a política de privacidade da EBRADI / Grupo Ânima Educação.
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ambiente 100% Seguro</span>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Confirmar Inscrição</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-[#0b1b36]">
                Matrícula Solicitada com Sucesso!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Parabéns, <strong>{formData.name || 'Doutor(a)'}</strong>! Seus dados foram validados no sistema da EBRADI e o protocolo de matrícula é:
              </p>
              <div className="inline-block px-4 py-1.5 rounded-lg bg-slate-100 font-mono text-sm font-bold text-slate-800 border border-slate-300">
                EBRADI-2025-{Math.floor(100000 + Math.random() * 900000)}
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 text-left space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#0b1b36]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Próximos Passos:</span>
              </div>
              <p>• Enviamos os dados de acesso provisórios para o seu e-mail: <strong>{formData.email || 'seu e-mail'}</strong>.</p>
              <p>• Nosso consultor educacional entrará em contato via WhatsApp no número <strong>{formData.phone || 'seu telefone'}</strong> para orientá-lo sobre o início imediato das aulas.</p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 rounded-xl bg-[#0b1b36] hover:bg-[#162d59] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Concluir e Ir para o Portal
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
