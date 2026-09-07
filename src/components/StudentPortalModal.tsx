import React, { useState } from 'react';
import { 
  X, 
  User, 
  Lock, 
  ArrowRight, 
  HelpCircle, 
  GraduationCap, 
  Scale,
  CheckCircle2
} from 'lucide-react';

interface StudentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentPortalModal: React.FC<StudentPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogged(true);
  };

  const handleResetAndClose = () => {
    setIsLogged(false);
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
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="bg-[#0b1b36] text-white p-6 relative text-center">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center mx-auto mb-3 shadow">
            <Scale className="w-7 h-7 text-amber-300" />
          </div>

          <h3 className="text-xl font-bold font-cinzel text-white">
            Portal do Aluno EBRADI
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Sala de Aula Virtual • Ecossistema Ânima
          </p>
        </div>

        {/* Content */}
        {!isLogged ? (
          <form onSubmit={handleLogin} className="p-6 sm:p-8 space-y-4">
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  CPF ou Registro Acadêmico (RA)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Digite seu CPF ou RA"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-red-600 focus:bg-white focus:outline-none"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-slate-700">
                    Senha de Acesso
                  </label>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert('Instruções de redefinição de senha foram enviadas para seu e-mail cadastrado.'); }} className="text-[11px] text-red-600 hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-red-600 focus:bg-white focus:outline-none"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Entrar na Sala de Aula</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-4 border-t border-slate-100 text-center space-y-2">
              <span className="text-[11px] text-slate-500 block">
                Ainda não é aluno da EBRADI?
              </span>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="text-xs font-bold text-[#0b1b36] hover:text-red-600 transition-colors"
              >
                Conheça os cursos de Pós-Graduação e OAB →
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-bold text-[#0b1b36]">
                Bem-vindo à Sala de Aula Virtual!
              </h4>
              <p className="text-xs text-slate-600">
                Acesso identificado para: <strong>{username || 'Aluno EBRADI'}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2">
              <span className="font-bold text-[#0b1b36] block">Ambiente de Aprendizagem Ativo:</span>
              <p>• Suas disciplinas e videoaulas estão carregadas no painel.</p>
              <p>• Fórum de dúvidas com tutores e professores disponível 24h.</p>
              <p>• Biblioteca virtual com mais de 10.000 títulos jurídicos inclusa.</p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-[#0b1b36] hover:bg-[#152a50] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Acessar Módulos de Estudo
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
