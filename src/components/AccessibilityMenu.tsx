import React, { useState, useEffect, useCallback } from 'react';
import { 
  Volume2, 
  VolumeX, 
  ImageOff, 
  Palette, 
  Paintbrush, 
  ArrowUp, 
  ArrowDown, 
  X, 
  Info, 
  ChevronDown, 
  Droplet, 
  Sparkles, 
  RotateCcw, 
  Check, 
  ShieldCheck,
  Eye,
  Sliders
} from 'lucide-react';

interface AccessibilityMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onOpenPrivacy?: () => void;
}

export type AccessibilityProfile = 
  | 'default' 
  | 'low-vision' 
  | 'color-blind' 
  | 'dyslexia' 
  | 'adhd' 
  | 'elderly';

export const AccessibilityMenu: React.FC<AccessibilityMenuProps> = ({
  isOpen,
  onToggle,
  onClose,
  onOpenPrivacy
}) => {
  // States for accessibility features
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0); // -1, 0, 1, 2, 3
  const [hideImages, setHideImages] = useState<boolean>(false);
  const [bgMode, setBgMode] = useState<'default' | 'dark' | 'sepia' | 'light-high'>('default');
  const [textColorMode, setTextColorMode] = useState<'default' | 'yellow' | 'white' | 'black'>('default');
  const [contrastFilter, setContrastFilter] = useState<'none' | 'mono' | 'low' | 'high'>('none');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [speechActive, setSpeechActive] = useState<boolean>(false);
  const [activeProfile, setActiveProfile] = useState<AccessibilityProfile>('default');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const playFeedbackSound = (type: 'beep' | 'toggle' | 'reset' = 'toggle') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'beep') {
        osc.frequency.setValueAtTime(600, ctx.currentTime);
      } else if (type === 'reset') {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      } else {
        osc.frequency.setValueAtTime(520, ctx.currentTime);
      }
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    } catch {
      // AudioContext might be blocked before user gesture
    }
  };

  // Text to Speech
  const speakText = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/\s+/g, ' ').trim().slice(0, 300);
    if (!cleanText) return;
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }, []);

  // Handle Speech Active Mode
  useEffect(() => {
    if (!speechActive) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return;
    }

    const handlePointerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Don't speak if inside the accessibility menu itself
      if (target.closest('#accessibility-modal-card') || target.closest('#accessibility-menu')) {
        return;
      }

      const text = target.innerText || target.getAttribute('aria-label') || target.getAttribute('title') || '';
      if (text) {
        speakText(text);
      }
    };

    document.addEventListener('click', handlePointerClick, true);
    return () => {
      document.removeEventListener('click', handlePointerClick, true);
    };
  }, [speechActive, speakText]);

  // Apply Font Size
  useEffect(() => {
    const root = document.documentElement;
    if (fontSizeLevel === 0) {
      root.style.fontSize = '';
    } else if (fontSizeLevel === 1) {
      root.style.fontSize = '112%';
    } else if (fontSizeLevel === 2) {
      root.style.fontSize = '125%';
    } else if (fontSizeLevel === 3) {
      root.style.fontSize = '138%';
    } else if (fontSizeLevel === -1) {
      root.style.fontSize = '90%';
    }
  }, [fontSizeLevel]);

  // Apply Hide Images
  useEffect(() => {
    if (hideImages) {
      document.body.classList.add('a11y-hide-images');
    } else {
      document.body.classList.remove('a11y-hide-images');
    }
  }, [hideImages]);

  // Apply Background & Text Colors
  useEffect(() => {
    const body = document.body;
    body.classList.remove('a11y-bg-dark', 'a11y-bg-sepia', 'a11y-bg-light');
    if (bgMode === 'dark') body.classList.add('a11y-bg-dark');
    if (bgMode === 'sepia') body.classList.add('a11y-bg-sepia');
    if (bgMode === 'light-high') body.classList.add('a11y-bg-light');

    body.classList.remove('a11y-text-yellow', 'a11y-text-white', 'a11y-text-black');
    if (textColorMode === 'yellow') body.classList.add('a11y-text-yellow');
    if (textColorMode === 'white') body.classList.add('a11y-text-white');
    if (textColorMode === 'black') body.classList.add('a11y-text-black');
  }, [bgMode, textColorMode]);

  // Apply Filters (Contrast / Monochrome)
  useEffect(() => {
    const body = document.body;
    if (contrastFilter === 'mono') {
      body.style.filter = 'grayscale(100%)';
    } else if (contrastFilter === 'low') {
      body.style.filter = 'contrast(80%)';
    } else if (contrastFilter === 'high') {
      body.style.filter = 'contrast(135%) brightness(105%)';
    } else {
      body.style.filter = '';
    }
  }, [contrastFilter]);

  // Profile Presets
  const applyProfile = (profile: AccessibilityProfile) => {
    setActiveProfile(profile);
    setIsProfileDropdownOpen(false);
    playFeedbackSound('beep');

    if (profile === 'default') {
      resetAll();
      showToast('Perfil Padrão restaurado');
      return;
    }

    if (profile === 'low-vision') {
      setFontSizeLevel(2);
      setContrastFilter('high');
      setHideImages(false);
      showToast('Perfil Baixa Visão ativado (+Fonte e +Contraste)');
    } else if (profile === 'color-blind') {
      setContrastFilter('mono');
      showToast('Perfil Daltonismo ativado (Modo Monocromático)');
    } else if (profile === 'dyslexia') {
      setFontSizeLevel(1);
      setBgMode('sepia');
      document.body.classList.add('a11y-dyslexia');
      showToast('Perfil Dislexia ativado (Fundo suave e leitura ampliada)');
    } else if (profile === 'adhd') {
      setHideImages(true);
      setBgMode('sepia');
      showToast('Perfil Foco / TDAH ativado (Imagens ocultas)');
    } else if (profile === 'elderly') {
      setFontSizeLevel(2);
      setContrastFilter('high');
      setSoundEnabled(true);
      showToast('Perfil Sênior / Presbiopia ativado');
    }
  };

  const resetAll = () => {
    setFontSizeLevel(0);
    setHideImages(false);
    setBgMode('default');
    setTextColorMode('default');
    setContrastFilter('none');
    setSpeechActive(false);
    setActiveProfile('default');
    document.body.classList.remove('a11y-dyslexia');
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    playFeedbackSound('reset');
    showToast('Acessibilidade redefinida para o padrão');
  };

  // Handlers for individual cards
  const toggleSpeech = () => {
    const next = !speechActive;
    setSpeechActive(next);
    playFeedbackSound('toggle');
    if (next) {
      speakText('Leitor de tela ativado. Clique em qualquer texto da página para ouvir.');
      showToast('Leitor Ativo: Clique em qualquer texto para ouvir');
    } else {
      showToast('Leitor de tela desativado');
    }
  };

  const toggleImages = () => {
    const next = !hideImages;
    setHideImages(next);
    playFeedbackSound('toggle');
    showToast(next ? 'Imagens ocultadas da página' : 'Imagens visíveis');
  };

  const cycleBgColor = () => {
    playFeedbackSound('toggle');
    if (bgMode === 'default') {
      setBgMode('dark');
      showToast('Fundo: Escuro de Alto Contraste');
    } else if (bgMode === 'dark') {
      setBgMode('sepia');
      showToast('Fundo: Sépia (Conforto de Leitura)');
    } else if (bgMode === 'sepia') {
      setBgMode('light-high');
      showToast('Fundo: Claro Puro');
    } else {
      setBgMode('default');
      showToast('Fundo: Padrão do Site');
    }
  };

  const cycleTextColor = () => {
    playFeedbackSound('toggle');
    if (textColorMode === 'default') {
      setTextColorMode('yellow');
      showToast('Texto: Amarelo Alto Contraste');
    } else if (textColorMode === 'yellow') {
      setTextColorMode('white');
      showToast('Texto: Branco Puro');
    } else if (textColorMode === 'white') {
      setTextColorMode('black');
      showToast('Texto: Preto Intenso');
    } else {
      setTextColorMode('default');
      showToast('Texto: Padrão');
    }
  };

  const increaseFontSize = () => {
    playFeedbackSound('toggle');
    setFontSizeLevel((prev) => {
      const next = Math.min(prev + 1, 3);
      showToast(`Tamanho da Fonte: +${(next * 12) + 12}%`);
      return next;
    });
  };

  const decreaseFontSize = () => {
    playFeedbackSound('toggle');
    setFontSizeLevel((prev) => {
      const next = Math.max(prev - 1, -1);
      showToast(next === 0 ? 'Tamanho da Fonte: Normal (100%)' : `Tamanho da Fonte: ${next > 0 ? `+${next * 12}%` : '-10%'}`);
      return next;
    });
  };

  const toggleMonochrome = () => {
    playFeedbackSound('toggle');
    if (contrastFilter === 'mono') {
      setContrastFilter('none');
      showToast('Modo Monocromático Desativado');
    } else {
      setContrastFilter('mono');
      showToast('Modo Monocromático (Escala de Cinza) Ativado');
    }
  };

  const decreaseContrast = () => {
    playFeedbackSound('toggle');
    if (contrastFilter === 'low') {
      setContrastFilter('none');
      showToast('Contraste: Normal');
    } else {
      setContrastFilter('low');
      showToast('Contraste Reduzido (Mais Suave)');
    }
  };

  const increaseContrast = () => {
    playFeedbackSound('toggle');
    if (contrastFilter === 'high') {
      setContrastFilter('none');
      showToast('Contraste: Normal');
    } else {
      setContrastFilter('high');
      showToast('Alto Contraste Ativado');
    }
  };

  const profileLabels: Record<AccessibilityProfile, string> = {
    'default': 'Selecione seu perfil de acessibilidade',
    'low-vision': 'Baixa Visão (Fonte ampliada e contraste)',
    'color-blind': 'Daltonismo (Monocromático)',
    'dyslexia': 'Dislexia (Fundo suave e espaçamento)',
    'adhd': 'TDAH / Foco (Imagens ocultas)',
    'elderly': 'Sênior / Presbiopia'
  };

  return (
    <>
      {/* Dynamic Global Accessibility Styles */}
      <style>{`
        body.a11y-hide-images img {
          opacity: 0 !important;
          visibility: hidden !important;
        }
        body.a11y-hide-images picture,
        body.a11y-hide-images video {
          opacity: 0.1 !important;
        }
        body.a11y-bg-dark {
          background-color: #0b1120 !important;
          color: #f8fafc !important;
        }
        body.a11y-bg-dark section {
          background-color: #0b1120 !important;
        }
        body.a11y-bg-sepia {
          background-color: #f6efe2 !important;
          color: #2d261e !important;
        }
        body.a11y-bg-sepia section {
          background-color: #f6efe2 !important;
        }
        body.a11y-bg-light {
          background-color: #ffffff !important;
          color: #000000 !important;
        }
        body.a11y-text-yellow * {
          color: #fde047 !important;
        }
        body.a11y-text-white * {
          color: #ffffff !important;
        }
        body.a11y-text-black * {
          color: #000000 !important;
        }
        body.a11y-dyslexia {
          letter-spacing: 0.05em !important;
          line-height: 1.8 !important;
        }
      `}</style>

      {/* Floating Trigger Button at Bottom Left */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
        <button
          id="accessibility-menu"
          type="button"
          role="button"
          title={isOpen ? "Fechar Menu de Acessibilidade" : "Abrir Menu de Acessibilidade"}
          aria-disabled="false"
          aria-label={isOpen ? "Fechar Menu de Acessibilidade" : "Abrir Menu de Acessibilidade"}
          aria-hidden="false"
          aria-expanded={isOpen}
          onClick={onToggle}
          className={`_11y_Button_button_3b44e _11y_MenuIcon_icon_10c15 _11y_MenuIcon_left-bottom_010f2 false false _11y_MenuIcon_z-index-max_0c692 _11y_Button_fadeUp_94261 relative w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-cyan-400 ${
            isOpen 
              ? 'bg-white text-slate-800 border-2 border-slate-300 hover:bg-slate-100 hover:scale-105' 
              : 'bg-white hover:scale-110 border-2 border-slate-200'
          }`}
        >
          {isOpen ? (
            /* Close State (matches image 2 bottom left) */
            <X className="w-6 h-6 text-slate-800 stroke-[2.5]" />
          ) : (
            /* Vitruvian Accessibility Icon (matches image 1) */
            <div className="w-10 h-10 rounded-full flex items-center justify-center relative select-none">
              <svg 
                viewBox="0 0 100 100" 
                className="w-9 h-9"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer concentric guide circle */}
                <circle cx="50" cy="50" r="46" stroke="#1e293b" strokeWidth="3" />
                {/* Figure Head (Cyan filled circle) */}
                <circle cx="50" cy="28" r="8" fill="#00BCD4" stroke="#0f172a" strokeWidth="2" />
                {/* Outstretched Arms */}
                <line x1="22" y1="46" x2="78" y2="46" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                {/* Body Spine */}
                <line x1="50" y1="36" x2="50" y2="64" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                {/* Outstretched Legs */}
                <line x1="50" y1="62" x2="26" y2="82" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                <line x1="50" y1="62" x2="74" y2="82" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                {/* Nodes on hands and feet (Cyan dots) */}
                <circle cx="22" cy="46" r="3.5" fill="#00BCD4" />
                <circle cx="78" cy="46" r="3.5" fill="#00BCD4" />
                <circle cx="26" cy="82" r="3.5" fill="#00BCD4" />
                <circle cx="74" cy="82" r="3.5" fill="#00BCD4" />
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* Accessibility Modal Window (matches image 2) */}
      {isOpen && (
        <div 
          id="accessibility-modal-card"
          className="fixed bottom-20 left-4 sm:bottom-22 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] max-w-[420px] bg-[#e6e9ee] rounded-[26px] shadow-2xl border-4 border-slate-300/80 overflow-hidden text-slate-800 animate-in fade-in slide-in-from-bottom-6 duration-200"
        >
          {/* Top Bar / Header */}
          <div className="p-4 sm:p-4.5 pb-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-[#445267] tracking-tight">
                Menu de Acessibilidade
              </h3>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Info Button */}
                <button
                  type="button"
                  onClick={() => setShowInfoModal(!showInfoModal)}
                  className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                  title="Sobre a acessibilidade"
                >
                  <Info className="w-3.5 h-3.5" />
                </button>

                {/* Sound Toggle */}
                <button
                  type="button"
                  onClick={() => {
                    setSoundEnabled(!soundEnabled);
                    showToast(!soundEnabled ? 'Sons ativados' : 'Sons desativados');
                  }}
                  className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                    soundEnabled ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-500'
                  }`}
                  title={soundEnabled ? "Desativar efeitos sonoros" : "Ativar efeitos sonoros"}
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                  <span className="text-[10px] hidden sm:inline">{soundEnabled ? 'ON' : 'OFF'}</span>
                </button>

                {/* Language / Flag */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-medium cursor-default">
                  <span>🇧🇷</span>
                  <ChevronDown className="w-3 h-3 text-slate-500" />
                </div>
              </div>
            </div>

            {/* Profile Dropdown Trigger */}
            <div className="relative mt-3">
              <button
                type="button"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-[#006b68] hover:bg-[#005855] text-white text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors shadow-sm cursor-pointer"
              >
                <span className="truncate pr-2">
                  {profileLabels[activeProfile]}
                </span>
                <ChevronDown className={`w-4 h-4 text-white shrink-0 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown Options */}
              {isProfileDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-30 text-xs text-slate-700">
                  <button
                    type="button"
                    onClick={() => applyProfile('default')}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 flex items-center justify-between"
                  >
                    <span>Padrão (Sem alterações)</span>
                    {activeProfile === 'default' && <Check className="w-3.5 h-3.5 text-[#006b68]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => applyProfile('low-vision')}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 flex items-center justify-between"
                  >
                    <span>Baixa Visão (Fonte ampliada e alto contraste)</span>
                    {activeProfile === 'low-vision' && <Check className="w-3.5 h-3.5 text-[#006b68]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => applyProfile('color-blind')}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 flex items-center justify-between"
                  >
                    <span>Daltonismo (Filtro monocromático)</span>
                    {activeProfile === 'color-blind' && <Check className="w-3.5 h-3.5 text-[#006b68]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => applyProfile('dyslexia')}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 flex items-center justify-between"
                  >
                    <span>Dislexia (Fundo sépia e espaçamento de texto)</span>
                    {activeProfile === 'dyslexia' && <Check className="w-3.5 h-3.5 text-[#006b68]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => applyProfile('adhd')}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 flex items-center justify-between"
                  >
                    <span>TDAH / Foco (Oculta imagens e distrações)</span>
                    {activeProfile === 'adhd' && <Check className="w-3.5 h-3.5 text-[#006b68]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => applyProfile('elderly')}
                    className="w-full text-left px-3.5 py-2 hover:bg-slate-100 flex items-center justify-between"
                  >
                    <span>Sênior / Presbiopia (Zoom e nitidez)</span>
                    {activeProfile === 'elderly' && <Check className="w-3.5 h-3.5 text-[#006b68]" />}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 3x3 Cards Grid (Exactly as shown in Image 2) */}
          <div className="px-4 pb-3">
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 max-h-[340px] overflow-y-auto pr-0.5">
              
              {/* 1. Clique para Ouvir */}
              <button
                type="button"
                onClick={toggleSpeech}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer select-none min-h-[96px] ${
                  speechActive 
                    ? 'bg-cyan-50 border-2 border-[#00BCD4] text-[#008ba3] shadow-md scale-102' 
                    : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-800 shadow-sm'
                }`}
                title="Ativar leitor de tela interativo"
              >
                <div className="relative">
                  <Volume2 className="w-7 h-7 text-slate-900 fill-current" />
                  <Sparkles className="w-3.5 h-3.5 text-slate-900 absolute -top-1 -right-2 fill-current" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold leading-tight">
                  Clique para Ouvir
                </span>
              </button>

              {/* 2. Esconder Imagens */}
              <button
                type="button"
                onClick={toggleImages}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer select-none min-h-[96px] ${
                  hideImages 
                    ? 'bg-red-50 border-2 border-red-500 text-red-700 shadow-md scale-102' 
                    : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-800 shadow-sm'
                }`}
                title="Ocultar imagens da página"
              >
                <ImageOff className="w-7 h-7 text-slate-900 stroke-[2.2]" />
                <span className="text-[11px] sm:text-xs font-semibold leading-tight">
                  Esconder Imagens
                </span>
              </button>

              {/* 3. Alterar Cor de Fundo */}
              <button
                type="button"
                onClick={cycleBgColor}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer select-none min-h-[96px] ${
                  bgMode !== 'default'
                    ? 'bg-amber-50 border-2 border-amber-500 text-amber-900 shadow-md'
                    : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-800 shadow-sm'
                }`}
                title="Mudar paleta de cor de fundo (Escuro / Sépia / Claro)"
              >
                <Palette className="w-7 h-7 text-slate-900 fill-current" />
                <span className="text-[11px] sm:text-xs font-semibold leading-tight">
                  Alterar Cor de Fundo
                </span>
              </button>

              {/* 4. Alterar Cor do Texto */}
              <button
                type="button"
                onClick={cycleTextColor}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer select-none min-h-[96px] ${
                  textColorMode !== 'default'
                    ? 'bg-blue-50 border-2 border-blue-500 text-blue-900 shadow-md'
                    : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-800 shadow-sm'
                }`}
                title="Mudar cor do texto (Amarelo / Branco / Preto)"
              >
                <Paintbrush className="w-7 h-7 text-slate-900 stroke-[2.2]" />
                <span className="text-[11px] sm:text-xs font-semibold leading-tight">
                  Alterar Cor do Texto
                </span>
              </button>

              {/* 5. Aumentar Fonte */}
              <button
                type="button"
                onClick={increaseFontSize}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer select-none min-h-[96px] ${
                  fontSizeLevel > 0 
                    ? 'bg-emerald-50 border-2 border-emerald-500 text-emerald-800 shadow-md' 
                    : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-800 shadow-sm'
                }`}
                title="Aumentar tamanho do texto"
              >
                <div className="flex items-center justify-center text-slate-900 font-extrabold text-2xl leading-none">
                  <span>A</span>
                  <ArrowUp className="w-4 h-4 ml-0.5 stroke-[3]" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold leading-tight">
                  Aumentar Fonte
                </span>
              </button>

              {/* 6. Diminuir Fonte */}
              <button
                type="button"
                onClick={decreaseFontSize}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer select-none min-h-[96px] ${
                  fontSizeLevel < 0 
                    ? 'bg-emerald-50 border-2 border-emerald-500 text-emerald-800 shadow-md' 
                    : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-800 shadow-sm'
                }`}
                title="Diminuir tamanho do texto"
              >
                <div className="flex items-center justify-center text-slate-900 font-extrabold text-2xl leading-none">
                  <span>A</span>
                  <ArrowDown className="w-4 h-4 ml-0.5 stroke-[3]" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold leading-tight">
                  Diminuir Fonte
                </span>
              </button>

              {/* 7. Monocromático */}
              <button
                type="button"
                onClick={toggleMonochrome}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer select-none min-h-[96px] ${
                  contrastFilter === 'mono'
                    ? 'bg-slate-200 border-2 border-slate-700 text-slate-900 shadow-md'
                    : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-800 shadow-sm'
                }`}
                title="Ativar escala de cinza"
              >
                <div className="relative">
                  <Droplet className="w-7 h-7 text-slate-900 stroke-[2.2]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <line x1="0" y1="0" x2="28" y2="28" stroke="#000" strokeWidth="2.5" />
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold leading-tight">
                  Monocromático
                </span>
              </button>

              {/* 8. Diminuir Contraste */}
              <button
                type="button"
                onClick={decreaseContrast}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer select-none min-h-[96px] ${
                  contrastFilter === 'low'
                    ? 'bg-slate-200 border-2 border-slate-700 text-slate-900 shadow-md'
                    : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-800 shadow-sm'
                }`}
                title="Suavizar contraste da página"
              >
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-l-full bg-slate-900"></div>
                  </div>
                  <span className="font-extrabold text-slate-900 text-base">-</span>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold leading-tight">
                  Diminuir Contraste
                </span>
              </button>

              {/* 9. Aumentar Contraste */}
              <button
                type="button"
                onClick={increaseContrast}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer select-none min-h-[96px] ${
                  contrastFilter === 'high'
                    ? 'bg-slate-200 border-2 border-slate-700 text-slate-900 shadow-md'
                    : 'bg-white hover:bg-slate-50 border border-slate-100 text-slate-800 shadow-sm'
                }`}
                title="Aumentar contraste geral"
              >
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-r-full bg-slate-900"></div>
                  </div>
                  <span className="font-extrabold text-slate-900 text-base">+</span>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold leading-tight">
                  Aumentar Contraste
                </span>
              </button>

            </div>

            {/* Reset Row */}
            <div className="mt-2.5 flex items-center justify-between text-xs px-1">
              <button
                type="button"
                onClick={resetAll}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 font-semibold transition-colors cursor-pointer"
                title="Restaurar visual padrão do site"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Redefinir Padrões</span>
              </button>

              {onOpenPrivacy && (
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-slate-600 hover:text-[#006b68] font-medium transition-colors cursor-pointer underline decoration-slate-400"
                >
                  Canal de Privacidade
                </button>
              )}
            </div>
          </div>

          {/* Modal Footer (matches image 2 bottom bar: "Acessibilidade Digital por audima") */}
          <div className="bg-[#b3bac6] py-2.5 px-4 text-center select-none">
            <div className="flex items-center justify-center gap-1 text-xs font-medium text-white drop-shadow-xs">
              <span>Acessibilidade Digital por</span>
              <span className="font-black text-[#00BCD4] tracking-tight text-sm flex items-center">
                audi<span className="text-white">m</span>a
              </span>
            </div>
          </div>

          {/* Toast Alert */}
          {toastMessage && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-bold shadow-lg animate-in fade-in duration-150 whitespace-nowrap">
              {toastMessage}
            </div>
          )}

          {/* Info Modal Overlay */}
          {showInfoModal && (
            <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-xs p-5 flex flex-col justify-between text-slate-800">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#006b68]" />
                    <h4 className="font-bold text-sm text-slate-900">Sobre o Menu de Acessibilidade</h4>
                  </div>
                  <button 
                    onClick={() => setShowInfoModal(false)}
                    className="p-1 rounded-full hover:bg-slate-100 text-slate-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Este portal é projetado conforme as diretrizes internacionais de acessibilidade digital (WCAG 2.1 nível AA e e-MAG), promovendo inclusão e navegação equitativa para pessoas com deficiência visual, cognitiva, motora ou dislexia.
                </p>
                <div className="text-[11px] text-slate-500 space-y-1">
                  <p>• Suporte nativo a leitores de tela e navegação por teclado.</p>
                  <p>• Ajuste dinâmico de contraste, paletas e ampliação de fontes.</p>
                  <p>• Síntese de voz com pronúncia em Português Brasileiro.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowInfoModal(false)}
                className="w-full py-2 bg-[#006b68] hover:bg-[#005855] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Entendi e Voltar
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
