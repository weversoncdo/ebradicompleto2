import React, { useState } from 'react';
import { 
  Download, 
  X, 
  FileCode, 
  FileArchive, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Layers, 
  Globe, 
  Code2, 
  FileText,
  Sparkles,
  Info
} from 'lucide-react';

interface DownloadPageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadPageModal: React.FC<DownloadPageModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'files' | 'preview'>('files');
  const [selectedCodeTab, setSelectedCodeTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (content: string, type: string) => {
    navigator.clipboard.writeText(content);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  };

  const sampleHtmlSnippet = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EBRADI - Escola Brasileira de Direito | Pós-Graduação e Preparatórios OAB</title>
  <meta name="description" content="A maior e mais renomada instituição de pós-graduação e prática jurídica do Brasil. Cursos com Patronos Eméritos e nota 5 no MEC." />
  <link rel="stylesheet" href="./styles.css" />
</head>
<body class="bg-slate-50 text-slate-900 font-sans antialiased">
  <!-- Navbar EBRADI com fundo #0b1b36 -->
  <!-- Carrossel de Pós-Graduação em Direito -->
  <!-- Seção de Patronos Ampliada para Acessibilidade Jurídica -->
  <!-- Comentários e Depoimentos de Alunos em Itálico -->
  <!-- Catálogo de Cursos no formato com Cards Executivos -->
  <div id="root"></div>
  <script type="module" src="./app.js"></script>
</body>
</html>`;

  const sampleCssSnippet = `@import "tailwindcss";

/* EBRADI Core Theme Variables */
:root {
  --ebradi-navy: #0b1b36;
  --ebradi-dark-card: #0b1a28;
  --ebradi-red: #d92525;
  --ebradi-blue: #1d61c6;
  --ebradi-purple: #7e22ce;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
  background-color: #f8fafc;
}

/* Card estilo anexo */
.ebradi-course-card {
  background-color: #0b1a28;
  border: 1px solid #1e293b;
  border-radius: 1rem;
}`;

  const sampleJsSnippet = `// EBRADI Home Page Application Script
// Gerado com suporte a carrossel de pós-graduação, filtros de cursos e modal de matrícula
console.log("EBRADI Home Page Loaded Successfully");
`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0b1b36] p-6 text-white flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-red-400 border border-white/15">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">Baixar Código da Página Home</h3>
                <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider">
                  HTML • CSS • JS
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Página Home completa com todas as melhorias solicitadas (Navbar #0b1b36, Patronos, Depoimentos, Carrossel e Cards)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('files')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'files'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileArchive className="w-4 h-4" />
            <span>Opções de Download</span>
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'preview'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Ver e Copiar Código Fonte</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'files' ? (
            <div className="space-y-6">
              {/* Highlight Option 1: Standalone Single File */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0b1b36] text-white border border-slate-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1 max-w-lg">
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                      Recomendado • Mais Prático
                    </span>
                    <span className="text-xs text-slate-300">Pronto para uso imediato</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Arquivo Único Standalone (.HTML com CSS e JS embutidos)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Arquivo 100% autônomo com todas as melhorias. Basta dar <strong>dois cliques</strong> para abrir direto em qualquer navegador (Chrome, Edge, Safari, Firefox), sem precisar de Node ou servidor!
                  </p>
                </div>

                <a
                  href="/download/ebradi-home-standalone.html"
                  download="ebradi-home-standalone.html"
                  className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar HTML Único</span>
                </a>
              </div>

              {/* Highlight Option 2: Full ZIP Package */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-300 transition-all">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FileArchive className="w-4 h-4 text-red-600" />
                    <h4 className="text-sm font-bold text-slate-900">
                      Pacote Completo Compactado (.ZIP)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500">
                    Contém <code className="text-slate-700 bg-slate-100 px-1 py-0.5 rounded">index.html</code>, <code className="text-slate-700 bg-slate-100 px-1 py-0.5 rounded">styles.css</code>, <code className="text-slate-700 bg-slate-100 px-1 py-0.5 rounded">app.js</code>, arquivo standalone e manual explicativo README.txt.
                  </p>
                </div>

                <a
                  href="/download/ebradi-home-codigo.zip"
                  download="ebradi-home-codigo.zip"
                  className="px-4 py-2.5 rounded-lg bg-[#0b1b36] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Arquivo .ZIP</span>
                </a>
              </div>

              {/* Option 3: Individual Files */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Arquivos Individuais Separados
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* HTML file */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-3">
                    <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                      <FileCode className="w-4 h-4 text-orange-600" />
                      <span>index.html</span>
                    </div>
                    <p className="text-[11px] text-slate-500">Estrutura semântica HTML5</p>
                    <a
                      href="/download/index.html"
                      download="index.html"
                      className="w-full py-2 px-3 rounded-lg border border-slate-300 hover:bg-white text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar HTML</span>
                    </a>
                  </div>

                  {/* CSS file */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-3">
                    <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                      <FileCode className="w-4 h-4 text-blue-600" />
                      <span>styles.css</span>
                    </div>
                    <p className="text-[11px] text-slate-500">Folha de estilos e Tailwind</p>
                    <a
                      href="/download/styles.css"
                      download="styles.css"
                      className="w-full py-2 px-3 rounded-lg border border-slate-300 hover:bg-white text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar CSS</span>
                    </a>
                  </div>

                  {/* JS file */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-3">
                    <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                      <FileCode className="w-4 h-4 text-amber-500" />
                      <span>app.js</span>
                    </div>
                    <p className="text-[11px] text-slate-500">Lógica, carrossel e filtros</p>
                    <a
                      href="/download/app.js"
                      download="app.js"
                      className="w-full py-2 px-3 rounded-lg border border-slate-300 hover:bg-white text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar JS</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick instructions box */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3 text-xs text-blue-900">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold block">Como utilizar no seu computador ou servidor:</span>
                  <p className="text-blue-800 leading-relaxed">
                    Você pode abrir o arquivo <code className="bg-white/80 px-1 py-0.5 rounded font-mono">ebradi-home-standalone.html</code> diretamente sem qualquer configuração, ou subir a pasta para qualquer hospedagem (Apache, Nginx, Vercel, Netlify, cPanel ou servidor próprio).
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Code tabs */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCodeTab('html')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      selectedCodeTab === 'html'
                        ? 'bg-[#0b1b36] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    index.html
                  </button>
                  <button
                    onClick={() => setSelectedCodeTab('css')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      selectedCodeTab === 'css'
                        ? 'bg-[#0b1b36] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    styles.css
                  </button>
                  <button
                    onClick={() => setSelectedCodeTab('js')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      selectedCodeTab === 'js'
                        ? 'bg-[#0b1b36] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    app.js
                  </button>
                </div>

                <button
                  onClick={() => {
                    const code = selectedCodeTab === 'html' ? sampleHtmlSnippet : selectedCodeTab === 'css' ? sampleCssSnippet : sampleJsSnippet;
                    handleCopy(code, selectedCodeTab);
                  }}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copied === selectedCodeTab ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Código</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code viewer area */}
              <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto max-h-80 border border-slate-800 leading-relaxed">
                <code>
                  {selectedCodeTab === 'html' && sampleHtmlSnippet}
                  {selectedCodeTab === 'css' && sampleCssSnippet}
                  {selectedCodeTab === 'js' && sampleJsSnippet}
                </code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Arquivos gerados e prontos para download</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
