import React, { useState } from 'react';
import { 
  X, 
  Github, 
  Copy, 
  Check, 
  Terminal, 
  FolderTree, 
  FileCode, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface GithubExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubExportModal: React.FC<GithubExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const gitCommands = [
    {
      title: 'Passo 1: Inicializar o Repositório Git Local',
      code: 'git init\ngit add .\ngit commit -m "feat: clone detalhado do portal EBRADI (React, TypeScript, Tailwind, Vite)"',
    },
    {
      title: 'Passo 2: Definir Branch Principal (main)',
      code: 'git branch -M main',
    },
    {
      title: 'Passo 3: Conectar ao Repositório Remoto no GitHub',
      code: 'git remote add origin https://github.com/SEU_USUARIO/ebradi-clone.git',
    },
    {
      title: 'Passo 4: Enviar Arquivos para o GitHub',
      code: 'git push -u origin main',
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const projectFiles = [
    { path: '/README.md', desc: 'Documentação completa com instruções de instalação, stack e arquitetura' },
    { path: '/index.html', desc: 'Página HTML principal com metadados SEO, Cinzel e Plus Jakarta Sans' },
    { path: '/metadata.json', desc: 'Metadados oficiais do projeto EBRADI e permissões de sistema' },
    { path: '/package.json', desc: 'Configuração de dependências (React 19, Tailwind CSS 4, Vite 6, Lucide)' },
    { path: '/vite.config.ts', desc: 'Configurações de build Vite com suporte a Tailwind e aliases' },
    { path: '/tsconfig.json', desc: 'Configurações do TypeScript com tipagem estrita' },
    { path: '/.gitignore', desc: 'Filtros para não enviar node_modules, dist e variáveis locais' },
    { path: '/src/main.tsx', desc: 'Ponto de entrada React montando a aplicação' },
    { path: '/src/App.tsx', desc: 'Aplicação principal com roteamento de modais e catálogos' },
    { path: '/src/index.css', desc: 'Estilos globais e fontes tipográficas do portal' },
    { path: '/src/types.ts', desc: 'Tipagem TypeScript estruturada para Cursos, Patronos e Depoimentos' },
    { path: '/src/data/courses.ts', desc: 'Catálogo completo de Pós-Graduações, OAB e Extensões' },
    { path: '/src/data/faculty.ts', desc: 'Dados e obras de Ives Gandra, Maria Helena Diniz, Nucci, Peck' },
    { path: '/src/data/testimonials.ts', desc: 'Depoimentos de advogados, artigos e FAQ oficial' },
    { path: '/src/components/Navbar.tsx', desc: 'Barra superior com telefones, logotipo e navegação principal' },
    { path: '/src/components/HeroSection.tsx', desc: 'Banner principal com simulador rápido de cursos e notas MEC' },
    { path: '/src/components/CourseCatalog.tsx', desc: 'Catálogo interativo com filtros por categoria e busca' },
    { path: '/src/components/CourseDetailModal.tsx', desc: 'Modal com ementa pedagógica completa e diferenciais' },
    { path: '/src/components/PatronosSection.tsx', desc: 'Seção de honra com os grandes juristas e obras publicadas' },
    { path: '/src/components/OabSpecialSection.tsx', desc: 'Seção especializada de aprovação no Exame de Ordem' },
    { path: '/src/components/MethodologySection.tsx', desc: 'Os 4 pilares do método EBRADI e chancela USJT / Ânima' },
    { path: '/src/components/ScholarshipCalculator.tsx', desc: 'Simulador em tempo real de bolsas e convênios OAB' },
    { path: '/src/components/TestimonialsSection.tsx', desc: 'Avaliações de alunos e estatísticas institucionais' },
    { path: '/src/components/ArticlesSection.tsx', desc: 'Artigos jurídicos sobre reforma tributária, IA e OAB' },
    { path: '/src/components/FaqSection.tsx', desc: 'Perguntas frequentes sobre validação de diploma e TCC' },
    { path: '/src/components/EnrollmentModal.tsx', desc: 'Modal de matrícula e simulação de pagamento' },
    { path: '/src/components/StudentPortalModal.tsx', desc: 'Simulação da Sala de Aula Virtual / SIA do Aluno' },
    { path: '/src/components/Footer.tsx', desc: 'Rodapé institucional com selos do MEC, USJT e contatos' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0b1b36] text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 pr-8">
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center border border-slate-700">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Arquivos do Projeto Prontos para o GitHub
              </h3>
              <p className="text-xs text-slate-300">
                Guia passo a passo para clonar, commitar e subir o repositório completo.
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
          
          {/* Solução para a Página Branca no GitHub Pages */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Como Corrigir a Página Branca no GitHub Pages:</span>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              A página fica branca porque projetos React + Vite precisam ser <strong>compilados (build)</strong> antes de serem exibidos pelo navegador, enquanto o GitHub Pages estava tentando carregar os arquivos TypeScript brutos (<code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">/src/main.tsx</code>).
            </p>
            <div className="bg-white/80 p-3 rounded-xl border border-emerald-200 text-xs space-y-2 text-slate-800">
              <span className="font-bold text-emerald-900 block">Siga estes 2 passos simples no seu repositório:</span>
              <ol className="list-decimal list-inside space-y-1.5 pl-1">
                <li>
                  No GitHub, abra seu repositório (<code className="font-mono text-slate-900 bg-slate-100 px-1">weversoncdo/ebradicompleto2</code>) e clique na aba <strong>Settings</strong> (Configurações).
                </li>
                <li>
                  No menu lateral esquerdo, clique em <strong>Pages</strong>.
                </li>
                <li>
                  Em <strong>Build and deployment &gt; Source</strong>, troque de <em>Deploy from a branch</em> para <strong>GitHub Actions</strong>.
                </li>
                <li>
                  Sincronize os arquivos deste projeto no git (eles já incluem o workflow automático em <code className="font-mono text-slate-900 bg-slate-100 px-1">.github/workflows/deploy.yml</code> e <code className="font-mono text-slate-900 bg-slate-100 px-1">base: './'</code> no Vite). O GitHub fará o build e o site entrará no ar em segundos!
                </li>
              </ol>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold block mb-0.5">Projeto Modular e 100% Compilável</span>
              <span>
                Este clone foi construído seguindo as melhores práticas da web moderna (React 19 + TypeScript + Tailwind CSS). Todos os arquivos listados abaixo estão organizados no projeto prontos para commit no Git.
              </span>
            </div>
          </div>

          {/* Git Terminal Commands */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#0b1b36] flex items-center gap-2">
              <Terminal className="w-4 h-4 text-red-600" />
              <span>Comandos Git para Enviar ao seu GitHub</span>
            </h4>

            <div className="space-y-3">
              {gitCommands.map((cmd, idx) => (
                <div key={idx} className="bg-slate-900 rounded-xl p-4 text-white border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold text-amber-300">{cmd.title}</span>
                    <button
                      onClick={() => handleCopy(cmd.code, idx)}
                      className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="font-mono text-xs text-slate-200 bg-slate-950 p-3 rounded-lg overflow-x-auto whitespace-pre">
                    {cmd.code}
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Manifest of Files Created */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-[#0b1b36] flex items-center gap-2">
              <FolderTree className="w-4 h-4 text-red-600" />
              <span>Estrutura de Arquivos Criados ({projectFiles.length} arquivos)</span>
            </h4>

            <div className="bg-slate-50 rounded-xl border border-slate-200 divide-y divide-slate-200 max-h-60 overflow-y-auto">
              {projectFiles.map((file, i) => (
                <div key={i} className="p-2.5 px-3.5 flex items-center justify-between gap-3 text-xs">
                  <span className="font-mono font-bold text-slate-800 shrink-0">
                    {file.path}
                  </span>
                  <span className="text-slate-500 text-right truncate text-[11px]">
                    {file.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Download & Export instructions */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
            <span className="font-bold text-[#0b1b36] block">Como Baixar ou Exportar no AI Studio:</span>
            <p>1. Clique no menu de configurações do AI Studio (ícone superior) e selecione <strong>Export to GitHub</strong> ou <strong>Download ZIP</strong>.</p>
            <p>2. Se baixar em ZIP, descompacte na sua máquina e execute <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-slate-800">npm install</code> e depois <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-slate-800">npm run dev</code>.</p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#0b1b36] hover:bg-[#152a50] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Entendido, Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
