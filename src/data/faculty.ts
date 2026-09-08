import { FacultyMember } from '../types';

import photoThales from '../assets/images/patrono_thales_1788872801277.jpg';
import photoNardes from '../assets/images/patrono_nardes_1788872816920.jpg';
import photoTheodoro from '../assets/images/patrono_theodoro_1788872830194.jpg';
import photoPamplona from '../assets/images/patrono_pamplona_1788872843354.jpg';
import photoOpice from '../assets/images/patrono_opice_1788872856553.jpg';
import photoNucci from '../assets/images/patrono_nucci_1788872877207.jpg';
import photoTartuce from '../assets/images/patrono_tartuce_1788872896763.jpg';
import photoIves from '../assets/images/patrono_ives_1788872913680.jpg';

export const FACULTY: FacultyMember[] = [
  {
    id: 'thales-catta-preta',
    name: 'THALES CATTA PRETA LEAL',
    title: 'Patrono de Direito Societário',
    area: 'Direito Societário Aplicado',
    role: 'Doutor em Direito Comercial pela USP e Especialista em M&A e Governança Corporativa',
    bio: 'Referência nacional em Direito Societário, fusões e aquisições (M&A) e reorganizações empresariais estratégicas. Consultor de grandes corporações e docente titular nos programas de pós-graduação e Law Cases da EBRADI.',
    photo: photoThales,
    specialities: ['Direito Societário', 'M&A e Fusões', 'Governança Corporativa', 'Contratos Empresariais'],
    notableWorks: [
      'Tratado de Direito Societário Aplicado',
      'Governança Corporativa e Proteção de Minoritários',
      'Estruturação Jurídica de Fusões e Aquisições'
    ],
    quote: 'O Direito Societário moderno exige precisão cirúrgica na estruturação dos negócios e visão pragmática para prevenir litígios societários.'
  },
  {
    id: 'augusto-nardes',
    name: 'MINISTRO AUGUSTO NARDES',
    title: 'Patrono de Governança Pública',
    area: 'MBA em Governança Pública',
    role: 'Ministro do Tribunal de Contas da União (TCU) e Ex-Presidente do TCU',
    bio: 'Ministro do Tribunal de Contas da União desde 2005 e presidente da corte de contas no biênio 2013-2014. Mentor pioneiro do marco regulatório da governança pública no Brasil e autor das diretrizes de auditoria integrada adotadas na administração federal.',
    photo: photoNardes,
    specialities: ['Governança Pública', 'Controle Externo', 'Auditoria Governamental', 'Compliance Público'],
    notableWorks: [
      'Governança Pública: O Desafio do Brasil',
      'Diretrizes de Governança e Liderança no Setor Público',
      'Inovação e Controle no Tribunal de Contas'
    ],
    quote: 'A governança pública eficiente é o alicerce fundamental para a prosperidade social e para a segurança jurídica de toda a nação.'
  },
  {
    id: 'theodoro-agostinho',
    name: 'THEODORO AGOSTINHO',
    title: 'Patrono de Direito Previdenciário',
    area: 'Direito Previdenciário',
    role: 'Doutorando e Mestre em Direito Previdenciário pela PUC-SP, Coordenador e Advogado',
    bio: 'Um dos mais respeitados autores e conferencistas de Direito Previdenciário do país. Presidente da Comissão de Direito Previdenciário da OAB/SP e coordenador acadêmico com vasta atuação em causas perante o INSS e tribunais federais.',
    photo: photoTheodoro,
    specialities: ['Regime Geral de Previdência (RGPS)', 'Prática Previdenciária Administrativa e Judicial', 'Reforma da Previdência'],
    notableWorks: [
      'Manual de Direito Previdenciário Contemporâneo',
      'Prática Forense Previdenciária Passo a Passo',
      'Aposentadorias e Benefícios na Jurisprudência Atual'
    ],
    quote: 'A advocacia previdenciária lida diretamente com a dignidade da pessoa humana. O domínio da técnica transforma a vida dos nossos assistidos.'
  },
  {
    id: 'rodolfo-pamplona',
    name: 'RODOLFO PAMPLONA FILHO',
    title: 'Patrono de Direito Antidiscriminatório e ESG',
    area: 'Direito Antidiscriminatório, Compliance e ESG',
    role: 'Juiz Titular da Justiça do Trabalho, Professor Titular da UFBA e da UNIFACS, Doutor pela PUC-SP',
    bio: 'Magistrado trabalhista, membro da Academia Brasileira de Letras Jurídicas (ABLJ), doutor e mestre em Direito pela PUC-SP. Coautor da célebre coleção de Direito Civil mais vendida do país e pioneiro no ensino de Direito Antidiscriminatório e ESG.',
    photo: photoPamplona,
    specialities: ['Direito Antidiscriminatório', 'Compliance e ESG Trabalhista', 'Direito Civil', 'Relações de Trabalho'],
    notableWorks: [
      'Novo Curso de Direito Civil (com Pablo Stolze Gagliano)',
      'Direito Antidiscriminatório Aplicado às Relações de Emprego',
      'Manual de Responsabilidade Civil e Danos Morais'
    ],
    quote: 'Não basta conhecer a lei; é fundamental compreender a sua dimensão humana e transformadora no combate a todas as formas de discriminação.'
  },
  {
    id: 'renato-opice-blum',
    name: 'RENATO OPICE BLUM',
    title: 'Patrono de Direito Digital e IA',
    area: 'Direito Digital, Proteção de Dados e Inteligência Artificial',
    role: 'Pioneiro do Direito Digital no Brasil, Economista e Advogado, Presidente da ABDI',
    bio: 'Reconhecido internacionalmente como pioneiro do Direito Digital no Brasil. Especialista em cibersegurança, inteligência artificial aplicada ao Direito, governança de dados e LGPD, assessor de conselhos de administração das maiores empresas do país.',
    photo: photoOpice,
    specialities: ['Direito Digital', 'LGPD e Privacidade', 'Inteligência Artificial Forense', 'Cibersegurança Corporativa'],
    notableWorks: [
      'Direito Digital Aplicado',
      'Comentários à Lei Geral de Proteção de Dados (LGPD)',
      'Inteligência Artificial e Governança Jurídica'
    ],
    quote: 'A tecnologia não substitui o jurista qualificado, mas o jurista que domina a inteligência artificial inevitavelmente lidera o mercado.'
  },
  {
    id: 'guilherme-nucci',
    name: 'GUILHERME NUCCI',
    title: 'Patrono de Direito Penal',
    area: 'Direito Penal, Processo Penal e Execução Penal',
    role: 'Desembargador do TJSP, Livre-Docente pela PUC-SP e Autor de Manuais Clássicos',
    bio: 'Desembargador na Seção Criminal do Tribunal de Justiça de São Paulo, Livre-Docente, Doutor e Mestre em Processo Penal pela PUC-SP. Suas obras são citadas diariamente em acórdãos do Supremo Tribunal Federal e Superior Tribunal de Justiça.',
    photo: photoNucci,
    specialities: ['Direito Penal', 'Processo Penal', 'Tribunal do Júri', 'Execução Penal'],
    notableWorks: [
      'Código Penal Comentado',
      'Manual de Processo Penal e Execução Penal',
      'Tribunal do Júri: Teoria e Prática Forense',
      'Leis Penais e Processuais Penais Comentadas'
    ],
    quote: 'A prática penal exige precisão cirúrgica e respeito incondicional às garantias constitucionais. É essa mentalidade técnica que transmitimos.'
  },
  {
    id: 'flavio-tartuce',
    name: 'FLÁVIO TARTUCE',
    title: 'Patrono de Direito Civil',
    area: 'Direito Civil, Negocial e Imobiliário',
    role: 'Doutor em Direito Civil pela USP, Diretor Nacional do IBDFAM e Autor de Best-sellers',
    bio: 'Doutor em Direito Civil pela Faculdade de Direito da Universidade de São Paulo (USP), professor permanente de pós-graduação e autor do Manual de Direito Civil adotado nacionalmente nos tribunais superiores, concursos e universidades.',
    photo: photoTartuce,
    specialities: ['Direito Civil Geral', 'Direito das Obrigações e Contratos', 'Responsabilidade Civil', 'Direito Imobiliário'],
    notableWorks: [
      'Manual de Direito Civil - Volume Único (Consagrado Best-seller)',
      'Direito Civil: Teoria Geral dos Contratos e em Espécie',
      'Responsabilidade Civil e Danos Coletivos'
    ],
    quote: 'O Direito Civil é a espinha dorsal de toda a vida jurídica e negocial do país. Dominar seus institutos é o segredo de uma advocacia de sucesso.'
  },
  {
    id: 'ives-gandra',
    name: 'IVES GANDRA MARTINS',
    title: 'Patrono Regente da EBRADI',
    area: 'Advocacia Tributária',
    role: 'Jurista Emérito, Professor Doutor em Direito e Presidente do CEU Law School',
    bio: 'Patrono Regente da EBRADI e um dos mais célebres juristas da história brasileira. Advogado tributarista e constitucionalista com mais de 60 anos de atuação, autor de mais de 70 obras individuais e conselheiro de grandes cortes nacionais.',
    photo: photoIves,
    specialities: ['Advocacia Tributária', 'Direito Constitucional', 'Filosofia do Direito', 'Planejamento Tributário'],
    notableWorks: [
      'Curso de Direito Constitucional',
      'Comentários ao Código Tributário Nacional',
      'Uma Vida Dedicada ao Direito e à Cidadania'
    ],
    quote: 'A missão da EBRADI é ensinar o Direito que se aplica na prática, com o rigor ético e acadêmico que a cidadania brasileira exige.'
  }
];
