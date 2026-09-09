import { Course } from '../types';

export const COURSES: Course[] = [
  // ==========================================
  // 1. PÓS-GRADUAÇÃO
  // ==========================================
  {
    id: 'pos-advocacia-civel',
    title: 'Pós-Graduação em Advocacia Cível',
    category: 'pos',
    categoryTag: 'PÓS-GRADUAÇÃO',
    area: 'Direito Civil e Processual',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Mais Procurado',
    discountBadge: '48% OFF',
    mecGrade: 5,
    coordinator: 'Dra. Maria Helena Diniz & Dr. Antonio Notariano Jr.',
    coordinatorRole: 'Patrona Emérita & Coordenador Geral',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    description: 'Aprofunde-se na prática moderna do Direito Civil e Processual Civil com foco em atuação estratégica na solução e prevenção de litígios, redação jurídica avançada e técnicas de sustentação oral.',
    syllabus: [
      'Módulo 1: Teoria Geral do Direito Civil Contemporâneo',
      'Módulo 2: Responsabilidade Civil Avançada e Danos Morais/Materiais',
      'Módulo 3: Direito Contratual Estratégico e Novos Modelos de Negócio',
      'Módulo 4: Prática em Processo Civil: Recursos e Tribunais Superiores',
      'Módulo 5: Advocacia Consensual: Mediação e Arbitragem',
      'Módulo Bônus: Inteligência Artificial e Automação de Petições no Direito Civil'
    ],
    highlights: [
      'Corpo docente formado por desembargadores e doutores pela PUC-SP e USP',
      'Prática simulada com peças reais e estudos de jurisprudência do STJ',
      'Certificado emitido pela Universidade São Judas Tadeu (Nota 5 no MEC)',
      'Acesso a mentorias ao vivo mensais com especialistas'
    ],
    originalPrice: 389.90,
    promotionalPrice: 199.90,
    installments: 18,
    popular: true,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'pos-advocacia-empresarial',
    title: 'Pós-Graduação em Advocacia Empresarial',
    category: 'pos',
    categoryTag: 'PÓS-GRADUAÇÃO',
    area: 'Direito Empresarial & Societário',
    duration: '6 a 12 meses',
    hours: '390 horas',
    badge: 'Alta Empregabilidade',
    discountBadge: '46% OFF',
    mecGrade: 5,
    coordinator: 'Dr. Walfrido Warde & Corpo Docente EBRADI',
    coordinatorRole: 'Especialista em Direito Societário e Fusões',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    description: 'Capacitação prática para atuar na estruturação de negócios, governança corporativa, compliance, reorganizações societárias, fusões e aquisições (M&A) e recuperação judicial.',
    syllabus: [
      'Módulo 1: Estruturas Societárias Modernas e Contratos Empresariais',
      'Módulo 2: Governança Corporativa, ESG e Compliance nos Negócios',
      'Módulo 3: Operações de Fusões e Aquisições (M&A) e Due Diligence',
      'Módulo 4: Falência, Recuperação Judicial e Extrajudicial',
      'Módulo 5: Planejamento Tributário para Empresas'
    ],
    highlights: [
      'Foco direto nas rotinas dos maiores escritórios do Brasil',
      'Análise prática de contratos internacionais e joint ventures',
      'Formação para atuação consultiva de alto valor agregado'
    ],
    originalPrice: 429.90,
    promotionalPrice: 229.90,
    installments: 18,
    popular: true,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'pos-advocacia-tributaria',
    title: 'Pós-Graduação em Advocacia Tributária Estratégica',
    category: 'pos',
    categoryTag: 'PÓS-GRADUAÇÃO',
    area: 'Direito Tributário',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Patrono Regente',
    discountBadge: '45% OFF',
    mecGrade: 5,
    coordinator: 'Prof. Ives Gandra da Silva Martins',
    coordinatorRole: 'Patrono Regente da EBRADI & Jurista Emérito',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    description: 'Desenvolva competência sólida no contencioso e consultivo tributário com o maior tributarista do país. Abrange planejamento tributário, teses tributárias vencedoras e o impacto da Nova Reforma Tributária.',
    syllabus: [
      'Módulo 1: Sistema Tributário Nacional e Princípios Constitucionais',
      'Módulo 2: A Nova Reforma Tributária (IBS, CBS e IS) em Detalhes',
      'Módulo 3: Contencioso Tributário Judicial e Administrativo (CARF)',
      'Módulo 4: Teses Tributárias Contemporâneas no STF e STJ',
      'Módulo 5: Planejamento Tributário e Gestão de Passivos Fiscais'
    ],
    highlights: [
      'Aulas exclusivas com o Prof. Ives Gandra Martins',
      'Estudo minucioso da Reforma Tributária e transição fiscal',
      'Prática de peticionamento e defesas perante o CARF e tribunais estaduais'
    ],
    originalPrice: 399.90,
    promotionalPrice: 219.90,
    installments: 18,
    popular: true,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'pos-advocacia-trabalhista',
    title: 'Pós-Graduação em Advocacia Trabalhista e Previdenciária',
    category: 'pos',
    categoryTag: 'PÓS-GRADUAÇÃO',
    area: 'Direito do Trabalho & Previdência',
    duration: '6 a 12 meses',
    hours: '400 horas',
    badge: 'Prática Intensiva',
    discountBadge: '48% OFF',
    mecGrade: 5,
    coordinator: 'Prof. Renato Saraiva & Equipe',
    coordinatorRole: 'Especialista em Direito e Processo do Trabalho',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    description: 'Atuação prática completa na Justiça do Trabalho e INSS pós-reforma trabalhista e previdenciária. Petições iniciais, defesas, cálculos judiciais, audiências e sustentações orais perante o TST.',
    syllabus: [
      'Módulo 1: Direito Material do Trabalho Pós-Reformas',
      'Módulo 2: Prática em Audiência Trabalhista e Técnicas de Prova',
      'Módulo 3: Recursos Trabalhistas e Recurso de Revista no TST',
      'Módulo 4: Prática Previdenciária: Benefícios do RGPS e Planejamento',
      'Módulo 5: Compliance Trabalhista e Prevenção de Passivos'
    ],
    highlights: [
      'Metodologia com foco na rotina do advogado de reclamada e reclamante',
      'Planilhas e modelos de cálculos trabalhistas inclusos',
      'Simulações de audiências de instrução trabalhista'
    ],
    originalPrice: 369.90,
    promotionalPrice: 189.90,
    installments: 18,
    popular: false,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'pos-direito-familia',
    title: 'Pós-Graduação em Direito de Família, Sucessões e Planejamento Patrimonial',
    category: 'pos',
    categoryTag: 'PÓS-GRADUAÇÃO',
    area: 'Família e Sucessões',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Alta Rentabilidade',
    discountBadge: '48% OFF',
    mecGrade: 5,
    coordinator: 'Dra. Maria Helena Diniz & Docentes Especialistas',
    coordinatorRole: 'Autora Referência Nacional',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    description: 'Domine a área mais sensível e rentável da advocacia: planejamento sucessório, holdings familiares, divórcios complexos, inventários extrajudiciais e novos formatos de família.',
    syllabus: [
      'Módulo 1: Direito das Famílias Contemporâneo e Relações Parentais',
      'Módulo 2: Alimentos, Guarda Compartilhada e Alienação Parental',
      'Módulo 3: Regime de Bens, Divórcio Consensual e Litigioso',
      'Módulo 4: Direito Sucessório, Herança e Inventários na Prática',
      'Módulo 5: Planejamento Sucessório, Tributação e Estruturação de Holdings'
    ],
    highlights: [
      'Elaboração prática de minutas de pactos antenupciais e testamentos',
      'Estratégias de blindagem patrimonial lícita para famílias empresárias',
      'Corpo docente com atuação reconhecida no IBDFAM'
    ],
    originalPrice: 389.90,
    promotionalPrice: 199.90,
    installments: 18,
    popular: false,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },

  // ==========================================
  // 2. PÓS-GRADUAÇÃO MASTER CLASS
  // ==========================================
  {
    id: 'pos-direito-penal-criminologia',
    title: 'Pós-Graduação Master Class em Direito Penal e Criminologia',
    category: 'master-class',
    categoryTag: 'MASTER CLASS',
    area: 'Direito Penal & Processo Penal',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Referência Nacional',
    discountBadge: '48% OFF',
    mecGrade: 5,
    coordinator: 'Desembargador Dr. Guilherme Nucci',
    coordinatorRole: 'Patrono de Direito Penal & Desembargador TJSP',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    description: 'Especialize-se na prática penal contemporânea com o autor mais lido do Brasil na área criminal. Domine a atuação no Tribunal do Júri, acordos de não persecução penal (ANPP), lavagem de dinheiro e recursos penais.',
    syllabus: [
      'Módulo 1: Teoria Geral do Crime e Dogmática Penal Atualizada',
      'Módulo 2: Crimes Empresariais, Econômicos e Lavagem de Dinheiro',
      'Módulo 3: Tribunal do Júri na Prática: da Instrução ao Plenário',
      'Módulo 4: Acordo de Não Persecução Penal (ANPP) e Delação Premiada',
      'Módulo 5: Recursos Criminais no STJ e STF e Habeas Corpus Estratégico'
    ],
    highlights: [
      'Aulas magistrais com o Desembargador Guilherme Nucci',
      'Simulação de plenário do júri e audiências de custódia',
      'Abordagem aprofundada dos crimes digitais e novas tipificações penais'
    ],
    originalPrice: 489.90,
    promotionalPrice: 249.90,
    installments: 18,
    popular: true,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'pos-direito-digital-lgpd',
    title: 'Pós-Graduação Master Class em Direito Digital, LGPD e Inteligência Artificial',
    category: 'master-class',
    categoryTag: 'MASTER CLASS',
    area: 'Direito Digital & Inovação',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Em Alta no Mercado',
    discountBadge: '45% OFF',
    mecGrade: 5,
    coordinator: 'Dra. Patricia Peck Pinheiro',
    coordinatorRole: 'Patrona da Cátedra de Direito Digital',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    description: 'A especialização de maior prestígio no mercado brasileiro em conformidade com a LGPD, atuação como DPO (Encarregado de Dados), cibersegurança, crimes digitais e regulamentação de Inteligência Artificial.',
    syllabus: [
      'Módulo 1: Fundamentos do Direito Digital e Marco Civil da Internet',
      'Módulo 2: Implementação Prática da LGPD e Governança de Privacidade',
      'Módulo 3: Formação de DPO (Data Protection Officer) e Auditoria',
      'Módulo 4: Segurança da Informação, Incidentes e Cibersegurança',
      'Módulo 5: Regulação de Inteligência Artificial, Smart Contracts e Blockchain'
    ],
    highlights: [
      'Sob a patronagem da Dra. Patricia Peck, conselheira do Conselho Nacional de Proteção de Dados (CNPD)',
      'Modelos prontos de RIPD (Relatório de Impacto à Proteção de Dados) e políticas de privacidade',
      'Preparatório para certificações internacionais de privacidade'
    ],
    originalPrice: 499.90,
    promotionalPrice: 269.90,
    installments: 18,
    popular: true,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'masterclass-processo-civil',
    title: 'Pós-Graduação Master Class em Processo Civil e Grandes Litígios',
    category: 'master-class',
    categoryTag: 'MASTER CLASS',
    area: 'Processo Civil Avançado',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Litigância Estratégica',
    discountBadge: '45% OFF',
    mecGrade: 5,
    coordinator: 'Prof. Dr. Antonio Notariano Jr. & Ministros Convidados',
    coordinatorRole: 'Doutor em Processo Civil pela PUC-SP',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    description: 'Domine a condução de disputas de alto valor econômico, recursos repetitivos no STJ/STF, tutelas de urgência complexas e arbitragem em litígios empresariais.',
    syllabus: [
      'Módulo 1: Teoria Geral do Processo Aplicada a Casos Complexos',
      'Módulo 2: Meios de Impugnação às Decisões Judiciais nos Tribunais',
      'Módulo 3: Incidente de Resolução de Demandas Repetitivas (IRDR)',
      'Módulo 4: Execução Estratégica e Rastreamento Internacional de Bens',
      'Módulo 5: Laboratório de Sustentação Oral em Tribunais Superiores'
    ],
    highlights: [
      'Master Classes com ministros aposentados e juristas renomados',
      'Treinamento prático em incidentes processuais de alta repercussão',
      'Certificado Nota 5 MEC pela Universidade São Judas Tadeu'
    ],
    originalPrice: 489.90,
    promotionalPrice: 259.90,
    installments: 18,
    popular: false,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },

  // ==========================================
  // 3. MBA
  // ==========================================
  {
    id: 'mba-gestao-juridica',
    title: 'MBA em Gestão Jurídica, Legal Operations e Inovação',
    category: 'mba',
    categoryTag: 'MBA',
    area: 'Gestão Jurídica & Legal Ops',
    duration: '12 meses',
    hours: '400 horas',
    badge: 'Carreira Executiva',
    discountBadge: '40% OFF',
    mecGrade: 5,
    coordinator: 'Equipe de Gestão e Inovação EBRADI',
    coordinatorRole: 'Especialistas em Gestão e Métricas Jurídicas',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    description: 'Prepare-se para liderar departamentos jurídicos e escritórios de advocacia com visão de negócios, métricas de produtividade (KPIs), automação de fluxos e gestão de pessoas.',
    syllabus: [
      'Módulo 1: Fundamentos de Gestão Estratégica para Escritórios e Departamentos',
      'Módulo 2: Legal Operations: Métricas, KPIs e Dashboards Gerenciais',
      'Módulo 3: Gestão Financeira, Precificação de Honorários e Orçamento',
      'Módulo 4: Ferramentas Tecnológicas, Inteligência Artificial e Automação',
      'Módulo 5: Liderança, Negociação e Cultura Organizacional'
    ],
    highlights: [
      'Desenvolvimento de visão executiva para advogados e gestores',
      'Planilhas de precificação e modelos de dashboards de Legal Ops',
      'Certificado de MBA chancelado pela São Judas (Nota 5 MEC)'
    ],
    originalPrice: 520.00,
    promotionalPrice: 289.90,
    installments: 18,
    popular: true,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'mba-direito-corporativo',
    title: 'MBA em Direito Corporativo, Compliance e Governança ESG',
    category: 'mba',
    categoryTag: 'MBA',
    area: 'Direito Empresarial & ESG',
    duration: '12 meses',
    hours: '420 horas',
    badge: 'Alta Demanda',
    discountBadge: '40% OFF',
    mecGrade: 5,
    coordinator: 'Dr. Walfrido Warde & Especialistas em ESG',
    coordinatorRole: 'Juristas e Especialistas Corporativos',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    description: 'Capacite-se para atuar como conselheiro e consultor corporativo sênior, implementando programas de integridade, gestão de riscos regulatórios e diretrizes ESG.',
    syllabus: [
      'Módulo 1: Direito Societário Aplicado a Grandes Corporações',
      'Módulo 2: Programas de Compliance Anticorrupção e Canais de Denúncia',
      'Módulo 3: Governança Corporativa e Diretrizes ESG na Prática',
      'Módulo 4: Gestão de Riscos Contratuais e Regulatórios',
      'Módulo 5: Fusões, Aquisições e Auditorias Jurídicas (Due Diligence)'
    ],
    highlights: [
      'Casos reais de adequação a marcos regulatórios e investigações internas',
      'Foco direto na atuação de conselhos de administração e diretorias',
      'Diploma de MBA Universitário'
    ],
    originalPrice: 540.00,
    promotionalPrice: 299.90,
    installments: 18,
    popular: true,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'mba-planejamento-tributario',
    title: 'MBA em Planejamento Tributário e Gestão Fiscal Empresarial',
    category: 'mba',
    categoryTag: 'MBA',
    area: 'Direito Tributário',
    duration: '12 meses',
    hours: '400 horas',
    badge: 'Estratégico',
    discountBadge: '42% OFF',
    mecGrade: 5,
    coordinator: 'Cátedra Ives Gandra Martins',
    coordinatorRole: 'Equipe de Mestres e Consultores Fiscais',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    description: 'Atue na redução lícita da carga tributária de médias e grandes empresas em conformidade com o novo sistema tributário e decisões dos tribunais superiores.',
    syllabus: [
      'Módulo 1: Estruturas Tributárias Nacionais e Planejamento Fiscal',
      'Módulo 2: Impactos da Nova Reforma Tributária no Planejamento Empresarial',
      'Módulo 3: Tributação no Agronegócio, Indústria e Serviços',
      'Módulo 4: Reorganizações Societárias e Elisão Fiscal Segura',
      'Módulo 5: Gestão de Riscos e Procedimentos no CARF'
    ],
    highlights: [
      'Estudo prático de estruturas empresariais reais com economia fiscal comprovada',
      'Mentorias com tributaristas atuantes em grandes grupos empresariais',
      'Chancela de excelência acadêmica'
    ],
    originalPrice: 530.00,
    promotionalPrice: 289.90,
    installments: 18,
    popular: false,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },

  // ==========================================
  // 4. EBRADI ESSENTIALS
  // ==========================================
  {
    id: 'essentials-contratos',
    title: 'EBRADI Essentials: Prática em Contratos Empresariais e Negociação',
    category: 'essentials',
    categoryTag: 'ESSENTIALS',
    area: 'Contratos e Negócios',
    duration: '1 mês',
    hours: '30 horas',
    badge: 'Curso Rápido',
    discountBadge: '50% OFF',
    coordinator: 'Corpo Docente EBRADI',
    coordinatorRole: 'Especialistas em Direito Contratual',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    description: 'Formação essencial e objetiva para redigir, analisar e negociar cláusulas contratuais complexas, garantindo segurança jurídica nas transações comerciais.',
    syllabus: [
      'Aula 1: Estrutura Essencial dos Contratos Empresariais',
      'Aula 2: Cláusulas de Responsabilidade, Multas e Rescisão',
      'Aula 3: Contratos no Ambiente Digital e Assinaturas Eletrônicas',
      'Aula 4: Técnicas de Negociação e Resolução Amigável de Disputas'
    ],
    highlights: [
      'Modelos de minutas contratuais revisadas e prontas para uso',
      'Aulas gravadas em formato direto ao ponto com materiais complementares',
      'Certificado de capacitação profissional'
    ],
    originalPrice: 150.00,
    promotionalPrice: 74.90,
    installments: 4,
    popular: true
  },
  {
    id: 'essentials-licitacoes',
    title: 'EBRADI Essentials: Nova Lei de Licitações e Contratos Administrativos',
    category: 'essentials',
    categoryTag: 'ESSENTIALS',
    area: 'Direito Administrativo',
    duration: '1 mês',
    hours: '30 horas',
    badge: 'Atualização',
    discountBadge: '50% OFF',
    coordinator: 'Especialistas em Contratações Públicas',
    coordinatorRole: 'Procuradores e Consultores Administrativos',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    description: 'Compreenda com clareza as principais inovações da Lei 14.133/21: modalidades de licitação, fase preparatória, impugnações e gestão de contratos com o Poder Público.',
    syllabus: [
      'Aula 1: Visão Geral da Nova Lei 14.133 e Regras de Transição',
      'Aula 2: Diálogo Competitivo e Critérios de Julgamento',
      'Aula 3: Impugnações ao Edital e Recursos Administrativos',
      'Aula 4: Fiscalização e Equilíbrio Econômico-Financeiro'
    ],
    highlights: [
      'Checklist completo de conformidade para licitantes',
      'Aulas práticas com foco no fornecedor e na administração',
      'Certificado de curso essencial'
    ],
    originalPrice: 150.00,
    promotionalPrice: 74.90,
    installments: 4,
    popular: false
  },
  {
    id: 'essentials-calculos',
    title: 'EBRADI Essentials: Cálculos Trabalhistas e Liquidação de Sentença',
    category: 'essentials',
    categoryTag: 'ESSENTIALS',
    area: 'Direito do Trabalho',
    duration: '1 mês',
    hours: '30 horas',
    badge: 'Prático e Direto',
    discountBadge: '50% OFF',
    coordinator: 'Equipe Trabalhista EBRADI',
    coordinatorRole: 'Peritos e Advogados Trabalhistas',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    description: 'Aprenda a interpretar e realizar cálculos de horas extras, adicionais, reflexos em verbas rescisórias e uso do sistema PJe-Calc sem segredos.',
    syllabus: [
      'Aula 1: Princípios Fundamentais dos Cálculos Trabalhistas',
      'Aula 2: Apuração de Horas Extras, Intervalos e Adicionais',
      'Aula 3: Reflexos em FGTS, Férias, 13º e Aviso Prévio',
      'Aula 4: Operação Básica do Sistema PJe-Calc'
    ],
    highlights: [
      'Planilha automatizada de cálculos fornecida para download',
      'Passo a passo no PJe-Calc para peticionamento inicial e liquidação',
      'Certificado com carga horária reconhecida'
    ],
    originalPrice: 150.00,
    promotionalPrice: 74.90,
    installments: 4,
    popular: false
  },

  // ==========================================
  // 5. CURSOS LIVRES
  // ==========================================
  {
    id: 'law-case-processo-civil',
    title: 'LAW CASE – PROCESSO CIVIL APLICADO',
    category: 'cursos-livres',
    categoryTag: 'CURSO LIVRE',
    area: 'Processo Civil & Prática',
    duration: '12h',
    hours: '12h',
    badge: 'Destaque Prático',
    discountBadge: '35% OFF',
    coordinator: 'Prof. Dr. Antonio Notariano Jr.',
    coordinatorRole: 'Doutor em Processo Civil pela PUC-SP & Coordenador Geral',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    description: 'Imersão prática com foco na solução de casos concretos do Processo Civil: tutelas provisórias de urgência, impugnação ao cumprimento de sentença, recursos repetitivos no STJ e técnicas avançadas de sustentação oral.',
    syllabus: [
      'Módulo 1: Análise de Casos Reais: Estrutura da Petição Inicial e Pedidos de Tutela',
      'Módulo 2: Técnicas de Impugnação ao Cumprimento de Sentença e Defesas Executivas',
      'Módulo 3: Prática Recursal: Agravos, Apelações e Recursos aos Tribunais Superiores',
      'Módulo 4: Simulação de Sustentação Oral e Despacho com Magistrados'
    ],
    highlights: [
      'Análise prática de casos verídicos julgados pelos Tribunais',
      'Modelos de peças estratégicas prontas e editáveis',
      'Certificado de curso livre prático-profissional'
    ],
    originalPrice: 199.00,
    promotionalPrice: 129.35,
    installments: 4,
    popular: true
  },
  {
    id: 'extensao-ia-juridica',
    title: 'Curso Livre: Inteligência Artificial e Ferramentas Práticas para Advogados',
    category: 'cursos-livres',
    categoryTag: 'CURSO LIVRE',
    area: 'Inovação e Legal Tech',
    duration: '2 meses',
    hours: '60 horas',
    badge: 'Curso Inovador',
    discountBadge: '50% OFF',
    coordinator: 'Dra. Patricia Peck & Especialistas em Legal Tech',
    coordinatorRole: 'Líderes em Inovação Jurídica',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: 'Aprenda a aplicar ferramentas de Inteligência Artificial generativa (ChatGPT, Copilot, ferramentas especializadas de jurimetria) na redação de contratos, pesquisas de jurisprudência e otimização da rotina do seu escritório.',
    syllabus: [
      'Aula 1: Fundamentos de IA para a Advocacia: Riscos, Ética e Oportunidades',
      'Aula 2: Engenharia de Prompts Jurídicos para Peças e Contratos',
      'Aula 3: Análise Preditiva de Jurisprudência e Jurimetria Aplicada',
      'Aula 4: Proteção de Sigilo Profissional e Segurança de Dados em Modelos de IA',
      'Aula 5: Automação de Rotinas e Atendimento ao Cliente com IA'
    ],
    highlights: [
      'Templates de prompts jurídicos prontos para uso imediato',
      'Certificado de curso livre universitário',
      'Aplicabilidade real com ganho comprovado de produtividade'
    ],
    originalPrice: 180.00,
    promotionalPrice: 89.90,
    installments: 6,
    popular: true
  },
  {
    id: 'extensao-pratica-audiencias',
    title: 'Curso Livre: Prática em Audiências Cíveis e Técnicas de Sustentação Oral',
    category: 'cursos-livres',
    categoryTag: 'CURSO LIVRE',
    area: 'Prática Forense',
    duration: '2 meses',
    hours: '60 horas',
    badge: '100% Prático',
    discountBadge: '50% OFF',
    coordinator: 'Dr. Antonio Notariano Jr. & Magistrados Convidados',
    coordinatorRole: 'Processualistas e Advogados Litigantes',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    description: 'Perca a insegurança nas audiências. Aprenda a impugnar testemunhas, fazer contraditas certeiras, formular perguntas estratégicas e realizar sustentações orais convincentes perante tribunais.',
    syllabus: [
      'Aula 1: A Audiência de Conciliação e Mediação no CPC',
      'Aula 2: Audiência de Instrução e Julgamento: Contraditas e Prova Oral',
      'Aula 3: Como se portar diante de imprevistos e intervenções do juiz',
      'Aula 4: Técnicas de Oratória Forense e Persuasão Jurídica',
      'Aula 5: Sustentação Oral nos Tribunais de Justiça e Tribunais Regionais'
    ],
    highlights: [
      'Estudos de casos reais com gravações de audiências comentadas',
      'Técnicas de oratória e comunicação de alto impacto para juristas',
      'Manual de Prerrogativas do Advogado em Audiência'
    ],
    originalPrice: 160.00,
    promotionalPrice: 79.90,
    installments: 6,
    popular: false
  },
  {
    id: 'curso-livre-juri',
    title: 'Curso Livre: Prática no Tribunal do Júri e Técnicas de Plenário',
    category: 'cursos-livres',
    categoryTag: 'CURSO LIVRE',
    area: 'Direito Penal & Processo Penal',
    duration: '2 meses',
    hours: '60 horas',
    badge: 'Tribunal do Júri',
    discountBadge: '45% OFF',
    coordinator: 'Desembargador Dr. Guilherme Nucci',
    coordinatorRole: 'Patrono de Direito Penal da EBRADI',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    description: 'Aprenda os segredos da atuação no Tribunal do Júri: seleção dos jurados, quesitação, debates orais, técnicas de persuasão e estratégias de tréplica com um dos maiores especialistas do país.',
    syllabus: [
      'Aula 1: A Primeira Fase do Procedimento do Júri e Pronúncia',
      'Aula 2: Preparação do Plenário e Perfil dos Jurados',
      'Aula 3: Retórica Forense e Argumentação Perante o Conselho de Sentença',
      'Aula 4: Recursos e Nulidades no Procedimento do Júri'
    ],
    highlights: [
      'Casos históricos comentados pelo Desembargador Guilherme Nucci',
      'Roteiro de perguntas e objeções em plenário',
      'Certificado de curso de extensão profissional'
    ],
    originalPrice: 190.00,
    promotionalPrice: 99.90,
    installments: 6,
    popular: false
  },

  // ==========================================
  // 6. INTERNACIONAL
  // ==========================================
  {
    id: 'internacional-arbitragem',
    title: 'Certificação Internacional em Arbitragem Comercial e Mediação Global',
    category: 'internacional',
    categoryTag: 'INTERNACIONAL',
    area: 'Direito Internacional e Arbitragem',
    duration: '3 meses',
    hours: '90 horas',
    badge: 'Módulo Global',
    discountBadge: '40% OFF',
    coordinator: 'Docentes Internacionais EBRADI',
    coordinatorRole: 'Árbitros de Câmaras Internacionais',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'Capacite-se para atuar em disputas transnacionais regidas pelas regras da CCI (Câmara de Comércio Internacional), UNCITRAL e principais câmaras arbitrais globais.',
    syllabus: [
      'Módulo 1: Convenção de Nova York e Fundamentos da Arbitragem Internacional',
      'Módulo 2: Procedimento Arbitral Transnacional e Escolha de Árbitros',
      'Módulo 3: Produção de Provas e Medidas Cautelares de Urgência',
      'Módulo 4: Homologação e Execução de Sentenças Estrangeiras'
    ],
    highlights: [
      'Conteúdo bilíngue (Português/Inglês) com termos técnicos internacionais',
      'Aulas com árbitros atuantes na Europa e América Latina',
      'Certificação com reconhecimento internacional'
    ],
    originalPrice: 420.00,
    promotionalPrice: 249.90,
    installments: 10,
    popular: true
  },
  {
    id: 'internacional-gdpr',
    title: 'Módulo Internacional: GDPR e Regulamentação Europeia de IA (EU AI Act)',
    category: 'internacional',
    categoryTag: 'INTERNACIONAL',
    area: 'Direito Internacional & Digital',
    duration: '2 meses',
    hours: '60 horas',
    badge: 'Vanguarda Regulatória',
    discountBadge: '40% OFF',
    coordinator: 'Cátedra Patricia Peck & Especialistas Europeus',
    coordinatorRole: 'Especialistas em Regulação Europeia',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    description: 'Estudo aprofundado da regulamentação de dados da União Europeia (GDPR) e do novo marco de Inteligência Artificial (EU AI Act) para atuação com empresas multinacionais.',
    syllabus: [
      'Módulo 1: Princípios Fundamentais do Regulamento Geral de Proteção de Dados (GDPR)',
      'Módulo 2: Transferência Internacional de Dados e Cláusulas Padrão (SCCs)',
      'Módulo 3: O Regulamento Europeu de Inteligência Artificial (AI Act)',
      'Módulo 4: Governança de Algoritmos e Auditoria de Riscos Tecnológicos'
    ],
    highlights: [
      'Análise comparativa direta: LGPD (Brasil) vs. GDPR (União Europeia)',
      'Estudo dos precedentes das autoridades europeias de proteção de dados',
      'Certificado de extensão internacional'
    ],
    originalPrice: 380.00,
    promotionalPrice: 219.90,
    installments: 10,
    popular: false
  },
  {
    id: 'internacional-negocios',
    title: 'Curso Internacional em Direito dos Negócios Globais e Contratos em Inglês',
    category: 'internacional',
    categoryTag: 'INTERNACIONAL',
    area: 'Comércio Internacional',
    duration: '3 meses',
    hours: '80 horas',
    badge: 'Legal English',
    discountBadge: '40% OFF',
    coordinator: 'Juristas e Consultores Internacionais',
    coordinatorRole: 'Especialistas em Transações Cross-Border',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    description: 'Domine a redação e negociação de acordos cross-border: NDAs, MOUs, Share Purchase Agreements (SPA) e Joint Ventures com aplicação do Common Law.',
    syllabus: [
      'Módulo 1: Terminologia Jurídica Essencial em Língua Inglesa (Legal English)',
      'Módulo 2: Estrutura de Acordos Preliminares (MOU, LOI, Term Sheets)',
      'Módulo 3: Contratos Comerciais Internacionais e Cláusulas de Lei Aplicável',
      'Módulo 4: Simulação de Negociação em Ambiente Multilateral'
    ],
    highlights: [
      'Glossário prático de termos do Common Law para advogados brasileiros',
      'Minutas reais de contratos em inglês comentadas',
      'Certificado internacional de capacitação profissional'
    ],
    originalPrice: 390.00,
    promotionalPrice: 229.90,
    installments: 10,
    popular: false
  },

  // ==========================================
  // 7. EBRADI EXPERIENCE
  // ==========================================
  {
    id: 'experience-cortes-superiores',
    title: 'EBRADI Experience: Imersão em Cortes Superiores (STF e STJ na Prática)',
    category: 'experience',
    categoryTag: 'EXPERIENCE',
    area: 'Prática Recursal Superior',
    duration: 'Imersão',
    hours: '40 horas',
    badge: 'Imersão Exclusiva',
    discountBadge: '35% OFF',
    coordinator: 'Ministros e Advogados com Atuação em Brasília',
    coordinatorRole: 'Especialistas em Jurisprudência Superior',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    description: 'Vivência prática sobre o funcionamento interno do STF e STJ. Como vencer os filtros de admissibilidade (prequestionamento, repercussão geral) e despachar memoriais.',
    syllabus: [
      'Imersão 1: Mapa dos Recursos Especial (STJ) e Extraordinário (STF)',
      'Imersão 2: Técnicas para Superar as Súmulas Impeditivas (Súmula 7, 282, 284)',
      'Imersão 3: Audiências com Ministros e Estratégia de Despacho Presencial e Virtual',
      'Imersão 4: Sessão de Julgamento Simulada com Feedback de Especialistas'
    ],
    highlights: [
      'Análise dos bastidores das votações e formação de teses vinculantes',
      'Modelos de memoriais que atraem a atenção dos assessores de gabinete',
      'Certificado com o selo exclusivo EBRADI Experience'
    ],
    originalPrice: 350.00,
    promotionalPrice: 219.90,
    installments: 8,
    popular: true
  },
  {
    id: 'experience-legal-design',
    title: 'EBRADI Experience: Legal Design & Visual Law para Peças de Alto Impacto',
    category: 'experience',
    categoryTag: 'EXPERIENCE',
    area: 'Legal Design & Inovação',
    duration: 'Imersão',
    hours: '40 horas',
    badge: 'Visual Law',
    discountBadge: '35% OFF',
    coordinator: 'Especialistas em Design Jurídico e UX Forense',
    coordinatorRole: 'Consultores de Visual Law',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    description: 'Transforme petições longas e enfadonhas em documentos visuais claros, convincentes e acessíveis para magistrados, clientes e auditores.',
    syllabus: [
      'Imersão 1: Princípios de Design Thinking Aplicados ao Direito',
      'Imersão 2: Diagramação, Tipografia, Ícones e Gráficos em Peças Processuais',
      'Imersão 3: Linhas do Tempo Visuais e Resumos Executivos para Juízes',
      'Imersão 4: Oficina Prática de Criação de Peças com Ferramentas Acessíveis'
    ],
    highlights: [
      'Kit completo com mais de 50 elementos gráficos e templates editáveis',
      'Casos de processos reais que tiveram decisões favoráveis após o uso do Visual Law',
      'Certificado de capacitação prática'
    ],
    originalPrice: 320.00,
    promotionalPrice: 199.90,
    installments: 8,
    popular: false
  },
  {
    id: 'experience-sustentacao',
    title: 'EBRADI Experience: Laboratório de Sustentação Oral e Despachos com Magistrados',
    category: 'experience',
    categoryTag: 'EXPERIENCE',
    area: 'Oratória e Litigância Estratégica',
    duration: 'Imersão',
    hours: '40 horas',
    badge: 'Laboratório Prático',
    discountBadge: '35% OFF',
    coordinator: 'Prof. Antonio Notariano Jr. & Oradores Forenses',
    coordinatorRole: 'Advogados Litigantes de Tribunais',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    description: 'Treinamento intensivo de voz, postura, sintetização de argumentos em 15 minutos e controle emocional perante Câmaras e Turmas Recursais.',
    syllabus: [
      'Imersão 1: Roteiro Eficaz para Sustentação Oral em 10 a 15 Minutos',
      'Imersão 2: Como Construir Memoriais Curtos e Conclusivos',
      'Imersão 3: Gestão de Crises e Respostas a Questões de Ordem e Apartes',
      'Imersão 4: Simulação Gravada com Avaliação Personalizada de Desempenho'
    ],
    highlights: [
      'Gravação em estúdio simulado com análise individual de comunicação',
      'Técnicas respiratórias e modulação vocal aplicadas à advocacia',
      'Selo EBRADI Experience de Excelência em Oratória'
    ],
    originalPrice: 340.00,
    promotionalPrice: 209.90,
    installments: 8,
    popular: false
  },

  // ==========================================
  // 8. START EBRADI
  // ==========================================
  {
    id: 'start-primeiros-passos',
    title: 'Start EBRADI: Primeiros Passos na Advocacia – Do Zero ao Primeiro Cliente',
    category: 'start',
    categoryTag: 'START EBRADI',
    area: 'Carreira e Início na Advocacia',
    duration: '2 meses',
    hours: '50 horas',
    badge: 'Início de Carreira',
    discountBadge: '50% OFF',
    coordinator: 'Mentores de Prática Jurídica EBRADI',
    coordinatorRole: 'Advogados Empreendedores',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'Guia definitivo para recém-formados e novos advogados: abertura de sociedade unipessoal, prospecção ética de clientes, precificação de honorários e atendimento inicial.',
    syllabus: [
      'Módulo 1: Estrutura Básica do Escritório Físico e Digital',
      'Módulo 2: Como Cobrar Honorários: Contratos, Ad Exitum e Consultorias',
      'Módulo 3: Marketing Jurídico Ético e Presença Digital de Acordo com o Provimento da OAB',
      'Módulo 4: O Primeiro Atendimento ao Cliente e Fechamento de Contrato'
    ],
    highlights: [
      'Kit de sobrevivência do novo advogado: modelos de contratos e fichas de atendimento',
      'Comunidade exclusiva de networking com mentorias quinzenais',
      'Certificado de formação inicial'
    ],
    originalPrice: 160.00,
    promotionalPrice: 79.90,
    installments: 6,
    popular: true
  },
  {
    id: 'start-redacao-forense',
    title: 'Start EBRADI: Redação Jurídica Sem Juridiquês e Técnicas de Petição Inicial',
    category: 'start',
    categoryTag: 'START EBRADI',
    area: 'Prática Forense Básica',
    duration: '1 mês',
    hours: '35 horas',
    badge: 'Redação Prática',
    discountBadge: '50% OFF',
    coordinator: 'Corpo Docente EBRADI',
    coordinatorRole: 'Professores de Prática Processual',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    description: 'Aprenda a estruturar fatos, fundamentos e pedidos de forma coesa, persuasiva e direta, eliminando rebuscamentos que cansam os julgadores.',
    syllabus: [
      'Módulo 1: Os Erros Mais Comuns de Redação em Petições Iniciais',
      'Módulo 2: Narrativa Fática Clara e Conexão Lógica com a Doutrina e Jurisprudência',
      'Módulo 3: Formulação Precisa de Pedidos Principais e Subsidiários',
      'Módulo 4: Técnicas de Edição, Concisão e Formatação Moderna'
    ],
    highlights: [
      'Exemplos de "antes e depois" de peças reais reformuladas',
      'Banco de modelos comentados com explicações pedagógicas',
      'Certificado de capacitação em redação jurídica'
    ],
    originalPrice: 140.00,
    promotionalPrice: 69.90,
    installments: 4,
    popular: false
  },
  {
    id: 'start-rotinas-tribunais',
    title: 'Start EBRADI: Rotinas de Fóruns, Sistemas Eletrônicos (PJe, e-SAJ, Projudi) e Audiências',
    category: 'start',
    categoryTag: 'START EBRADI',
    area: 'Prática Operacional',
    duration: '1 mês',
    hours: '35 horas',
    badge: 'Rotina Forense',
    discountBadge: '50% OFF',
    coordinator: 'Advogados Litigantes EBRADI',
    coordinatorRole: 'Especialistas em Processo Eletrônico',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    description: 'Domine a parte prática e operacional da advocacia: protocolo digital, contagem de prazos em dias úteis, despachos de balcão e segurança no uso dos certificados digitais.',
    syllabus: [
      'Módulo 1: Configuração de Certificados Digitais e Navegadores Seguros',
      'Módulo 2: Protocolos e Gestão de Intimações no PJe, e-SAJ e Projudi',
      'Módulo 3: Contagem Segura de Prazos Processuais e Prevenção de Preclusão',
      'Módulo 4: Conduta Ética e Relações no Cartório e Balcão do Fórum'
    ],
    highlights: [
      'Aulas em vídeo mostrando a tela real dos sistemas eletrônicos',
      'Tabela prática de contagem de prazos pós-CPC',
      'Certificado de curso operacional'
    ],
    originalPrice: 140.00,
    promotionalPrice: 69.90,
    installments: 4,
    popular: false
  },

  // ==========================================
  // 9. PREPARATÓRIO OAB
  // ==========================================
  {
    id: 'oab-primeira-fase',
    title: 'Preparatório OAB 1ª Fase - Método EBRADI Inteligente',
    category: 'oab',
    categoryTag: 'OAB 1ª FASE',
    area: 'Exame de Ordem - Prova Objetiva',
    duration: '3 a 6 meses',
    hours: '240 horas',
    badge: 'Índice de Aprovação 87%',
    discountBadge: '55% OFF',
    coordinator: 'Corpo Docente Especialista em OAB / FGV',
    coordinatorRole: 'Equipe de Mestres e Doutores Examinadores',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'Curso preparatório definitivo para a 1ª fase do Exame de Ordem com inteligência diagnóstica, cronograma personalizado, raio-x dos temas mais cobrados pela banca FGV e simulados inéditos com correção em vídeo.',
    syllabus: [
      'Trilha 1: Ética Profissional e Estatuto da OAB (Garantia de 8 pontos)',
      'Trilha 2: Direito Constitucional, Administrativo e Tributário',
      'Trilha 3: Direito Civil e Processo Civil Estratégicos',
      'Trilha 4: Direito Penal e Processo Penal',
      'Trilha 5: Direito do Trabalho e Processo do Trabalho',
      'Trilha 6: Direitos Humanos, Filosofia, Ambiental, ECA e Consumidor',
      'Trilha de Simulados: 6 Simulados Inéditos com Ranking Nacional'
    ],
    highlights: [
      'Raio-X estatístico com mais de 10 anos de provas da FGV mapeadas',
      'Plataforma adaptativa que identifica seus pontos fracos e direciona seus estudos',
      'Garantia EBRADI: se não for aprovado, estude a próxima edição sem custos adicionais',
      'E-books resumo, flashcards digitais e banco de 5.000 questões comentadas'
    ],
    originalPrice: 220.00,
    promotionalPrice: 99.90,
    installments: 10,
    popular: true
  },
  {
    id: 'oab-segunda-fase-penal',
    title: 'Preparatório OAB 2ª Fase - Prática em Direito Penal',
    category: 'oab',
    categoryTag: 'OAB 2ª FASE',
    area: 'Exame de Ordem - Prova Prático-Profissional',
    duration: '2 a 3 meses',
    hours: '150 horas',
    badge: 'Correção Individualizada',
    discountBadge: '44% OFF',
    coordinator: 'Desembargador Dr. Guilherme Nucci & Equipe Penal',
    coordinatorRole: 'Especialistas em Prática Criminal FGV',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    description: 'Treinamento exaustivo para a 2ª fase da OAB em Direito Penal. Marcação de Vade Mecum autorizada, identificação infalível de peças (Resposta à Acusação, Memoriais, Apelação, RESE) e 4 correções individualizadas de simulados.',
    syllabus: [
      'Etapa 1: Estrutura da Peça Prático-Profissional e Técnica de Marcação do Vade Mecum',
      'Etapa 2: Peças da Fase Investigatória e Defesas Preliminares',
      'Etapa 3: Memoriais e Sustentação de Teses Absolutórias',
      'Etapa 4: Teoria Geral dos Recursos Penais e Agravos',
      'Etapa 5: Resolução de Questões Discursivas da Banca FGV',
      'Etapa 6: 4 Simulados com Correção Individual de Peças'
    ],
    highlights: [
      '4 correções individualizadas de peças com feedback detalhado de examinadores',
      'Oficina de identificação rápida de peças em até 10 minutos',
      'Plantão de dúvidas direto com os professores até o dia da prova'
    ],
    originalPrice: 249.90,
    promotionalPrice: 139.90,
    installments: 10,
    popular: true
  },
  {
    id: 'oab-segunda-fase-tributario',
    title: 'Preparatório OAB 2ª Fase - Prática em Direito Tributário',
    category: 'oab',
    categoryTag: 'OAB 2ª FASE',
    area: 'Exame de Ordem - Prova Prático-Profissional',
    duration: '2 a 3 meses',
    hours: '150 horas',
    badge: 'Alto Índice Histórico',
    discountBadge: '44% OFF',
    coordinator: 'Equipe Tributária EBRADI & Cátedra Ives Gandra',
    coordinatorRole: 'Especialistas em Tributário FGV',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    description: 'Área com um dos maiores índices de aprovação na 2ª fase. Domine as principais peças: Mandado de Segurança, Ação Anulatória, Ação Declaratória, Repetição de Indébito e Embargos à Execução Fiscal.',
    syllabus: [
      'Etapa 1: Linha do Tempo do Crédito Tributário e Identificação de Peças',
      'Etapa 2: Peças Iniciais Tributárias (MS, Declaratória, Anulatória, Repetição)',
      'Etapa 3: Defesas em Execução Fiscal (Exceção de Pré-Executividade e Embargos)',
      'Etapa 4: Recursos Tributários (Apelação, Agravo e Especiais)',
      'Etapa 5: Resolução de Questões Discursivas e Jurisprudência FGV'
    ],
    highlights: [
      'Treinamento prático da matriz tributária com a chancela EBRADI',
      '4 correções individualizadas com espelho oficial da FGV',
      'Guia definitivo de remissões permitidas no Vade Mecum'
    ],
    originalPrice: 249.90,
    promotionalPrice: 139.90,
    installments: 10,
    popular: false
  },
  {
    id: 'oab-segunda-fase-trabalho',
    title: 'Preparatório OAB 2ª Fase - Prática em Direito do Trabalho',
    category: 'oab',
    categoryTag: 'OAB 2ª FASE',
    area: 'Exame de Ordem - Prova Prático-Profissional',
    duration: '2 a 3 meses',
    hours: '150 horas',
    badge: 'Prática Consolidada',
    discountBadge: '44% OFF',
    coordinator: 'Prof. Renato Saraiva & Equipe Trabalhista',
    coordinatorRole: 'Referência Nacional em OAB Trabalhista',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    cardImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    description: 'Aprenda a estruturar com velocidade a Reclamação Trabalhista, Contestação, Recurso Ordinário e Ação de Consignação em Pagamento com base nas orientações jurisprudenciais do TST.',
    syllabus: [
      'Etapa 1: Teoria Geral da Peça Trabalhista e Marcação de CLT',
      'Etapa 2: Reclamação Trabalhista Completa e Pedidos Líquidos',
      'Etapa 3: Contestação com Preliminares, Prejudiciais e Mérito',
      'Etapa 4: Recurso Ordinário e Agravo de Petição',
      'Etapa 5: Resolução de Questões Discursivas com Foco nos Artigos da CLT'
    ],
    highlights: [
      '4 correções individualizadas de simulados inéditos',
      'Espelho de pontuação no padrão oficial da FGV',
      'Dicas estratégicas com o time pioneiro em preparação para a OAB'
    ],
    originalPrice: 249.90,
    promotionalPrice: 139.90,
    installments: 10,
    popular: false
  }
];
