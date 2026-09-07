import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'pos-advocacia-civel',
    title: 'Pós-Graduação em Advocacia Cível',
    category: 'pos',
    area: 'Direito Civil e Processual',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Mais Procurado',
    mecGrade: 5,
    coordinator: 'Dra. Maria Helena Diniz & Dr. Antonio Notariano Jr.',
    coordinatorRole: 'Patrona Emérita & Coordenador Geral',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
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
    area: 'Direito Empresarial & Societário',
    duration: '6 a 12 meses',
    hours: '390 horas',
    badge: 'Alta Empregabilidade',
    mecGrade: 5,
    coordinator: 'Dr. Walfrido Warde & Corpo Docente EBRADI',
    coordinatorRole: 'Especialista em Direito Societário e Fusões',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
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
    id: 'pos-direito-digital-lgpd',
    title: 'Pós-Graduação em Advocacia no Direito Digital e Proteção de Dados',
    category: 'digital',
    area: 'Direito Digital & Inovação',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Em Alta no Mercado',
    mecGrade: 5,
    coordinator: 'Dra. Patricia Peck Pinheiro',
    coordinatorRole: 'Patrona da Cátedra de Direito Digital',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
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
    originalPrice: 449.90,
    promotionalPrice: 249.90,
    installments: 18,
    popular: true,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'pos-advocacia-tributaria',
    title: 'Pós-Graduação em Advocacia Tributária Estratégica',
    category: 'pos',
    area: 'Direito Tributário',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Patrono Regente',
    mecGrade: 5,
    coordinator: 'Prof. Ives Gandra da Silva Martins',
    coordinatorRole: 'Patrono Regente da EBRADI & Jurista Emérito',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
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
    id: 'pos-direito-penal-criminologia',
    title: 'Pós-Graduação em Direito Penal e Criminologia',
    category: 'pos',
    area: 'Direito Penal & Processo Penal',
    duration: '6 a 12 meses',
    hours: '400 horas',
    badge: 'Referência Nacional',
    mecGrade: 5,
    coordinator: 'Desembargador Dr. Guilherme Nucci',
    coordinatorRole: 'Patrono de Direito Penal & Desembargador TJSP',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
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
    originalPrice: 389.90,
    promotionalPrice: 199.90,
    installments: 18,
    popular: false,
    partner: 'Universidade São Judas Tadeu (USJT)'
  },
  {
    id: 'pos-advocacia-trabalhista',
    title: 'Pós-Graduação em Advocacia Trabalhista e Previdenciária',
    category: 'pos',
    area: 'Direito do Trabalho & Previdência',
    duration: '6 a 12 meses',
    hours: '400 horas',
    badge: 'Prática Intensiva',
    mecGrade: 5,
    coordinator: 'Prof. Renato Saraiva & Equipe',
    coordinatorRole: 'Especialista em Direito e Processo do Trabalho',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
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
    id: 'oab-primeira-fase',
    title: 'Preparatório OAB 1ª Fase - Método EBRADI Inteligente',
    category: 'oab',
    area: 'Exame de Ordem - Prova Objetiva',
    duration: '3 a 6 meses',
    hours: '240 horas',
    badge: 'Índice de Aprovação 87%',
    coordinator: 'Corpo Docente Especialista em OAB / FGV',
    coordinatorRole: 'Equipe de Mestres e Doutores Examinadores',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
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
    area: 'Exame de Ordem - Prova Prático-Profissional',
    duration: '2 a 3 meses',
    hours: '150 horas',
    badge: 'Correção Individualizada',
    coordinator: 'Desembargador Dr. Guilherme Nucci & Equipe Penal',
    coordinatorRole: 'Especialistas em Prática Criminal FGV',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
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
    area: 'Exame de Ordem - Prova Prático-Profissional',
    duration: '2 a 3 meses',
    hours: '150 horas',
    badge: 'Alto Índice Histórico',
    coordinator: 'Equipe Tributária EBRADI & Cátedra Ives Gandra',
    coordinatorRole: 'Especialistas em Tributário FGV',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
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
    id: 'extensao-ia-juridica',
    title: 'Extensão: Inteligência Artificial e Ferramentas Práticas para Advogados',
    category: 'extensao',
    area: 'Inovação e Legal Tech',
    duration: '2 meses',
    hours: '60 horas',
    badge: 'Curso Inovador',
    coordinator: 'Dra. Patricia Peck & Especialistas em Legal Tech',
    coordinatorRole: 'Líderes em Inovação Jurídica',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
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
      'Certificado de extensão universitária',
      'Aplicabilidade real com ganho comprovado de produtividade'
    ],
    originalPrice: 180.00,
    promotionalPrice: 89.90,
    installments: 6,
    popular: true
  },
  {
    id: 'extensao-pratica-audiencias',
    title: 'Extensão: Prática em Audiências Cíveis e Técnicas de Sustentação Oral',
    category: 'extensao',
    area: 'Prática Forense',
    duration: '2 meses',
    hours: '60 horas',
    badge: '100% Prático',
    coordinator: 'Dr. Antonio Notariano Jr. & Magistrados Convidados',
    coordinatorRole: 'Processualistas e Advogados Litigantes',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
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
    id: 'pos-direito-familia',
    title: 'Pós-Graduação em Direito de Família, Sucessões e Planejamento Patrimonial',
    category: 'pos',
    area: 'Família e Sucessões',
    duration: '6 a 12 meses',
    hours: '420 horas',
    badge: 'Alta Rentabilidade',
    mecGrade: 5,
    coordinator: 'Dra. Maria Helena Diniz & Docentes Especialistas',
    coordinatorRole: 'Autora Referência Nacional',
    coordinatorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    description: 'Domine a área mais sensível e rentável da advocacia: planejamento sucessório, holdings familiares, divórcios complexos, inventários extrajudiciais e novos formatos de família.',
    syllabus: [
      'Módulo 1: Direito das Famílias Contemporâneo e Relações Parental',
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
  }
];
