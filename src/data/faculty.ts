import { FacultyMember } from '../types';

export const FACULTY: FacultyMember[] = [
  {
    id: 'ives-gandra',
    name: 'Prof. Dr. Ives Gandra da Silva Martins',
    title: 'Patrono Regente da EBRADI',
    role: 'Jurista Emérito, Professor Doutor em Direito e Presidente do CEU Law School',
    bio: 'Um dos maiores juristas da história moderna brasileira. Advogado tributarista com mais de 60 anos de atuação, autor de mais de 70 livros jurídicos individuais e coordenador de centenas de obras coletivas sobre Direito Constitucional e Tributário.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    specialities: ['Direito Constitucional', 'Direito Tributário', 'Filosofia do Direito', 'Teoria do Estado'],
    notableWorks: [
      'Curso de Direito Constitucional',
      'Comentários ao Código Tributário Nacional',
      'Uma Vida Dedicada ao Direito'
    ],
    quote: 'A missão da EBRADI é ensinar o Direito que se aplica na prática, com o rigor ético e acadêmico que a cidadania brasileira exige.'
  },
  {
    id: 'maria-helena-diniz',
    name: 'Profa. Dra. Maria Helena Diniz',
    title: 'Patrona da Cátedra de Direito Civil',
    role: 'Professora Titular da PUC-SP e Autora do mais consagrado Curso de Direito Civil do Brasil',
    bio: 'A mais célebre civilista do país. Doutora e Livre-Docente em Direito Civil pela PUC-SP, autora do famoso Dicionário Jurídico e da coleção de Direito Civil com dezenas de edições adotadas nos tribunais e faculdades de todo o Brasil.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    specialities: ['Direito Civil', 'Teoria Geral do Direito', 'Direito de Família e Sucessões', 'Bioética e Biodireito'],
    notableWorks: [
      'Curso de Direito Civil Brasileiro (7 Volumes)',
      'Dicionário Jurídico',
      'O Estado Atual do Biodireito'
    ],
    quote: 'O Direito Civil é a linguagem da convivência humana. Ensiná-lo na EBRADI com profundidade é transformar cada aluno em um defensor da justiça.'
  },
  {
    id: 'guilherme-nucci',
    name: 'Desembargador Dr. Guilherme de Souza Nucci',
    title: 'Patrono da Cátedra de Direito Penal',
    role: 'Desembargador do Tribunal de Justiça de São Paulo (TJSP) e Livre-Docente pela PUC-SP',
    bio: 'A maior referência viva em Direito Penal e Processual Penal no Brasil. Desembargador na Seção Criminal do TJSP, autor de mais de 30 obras fundamentais citadas diariamente nos acórdãos do STF e STJ.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    specialities: ['Direito Penal', 'Processo Penal', 'Tribunal do Júri', 'Execução Penal'],
    notableWorks: [
      'Código Penal Comentado',
      'Manual de Processo Penal e Execução Penal',
      'Tribunal do Júri: Teoria e Prática'
    ],
    quote: 'A prática penal exige precisão cirúrgica e respeito incondicional às garantias constitucionais. É essa mentalidade vencedora que transmitimos.'
  },
  {
    id: 'patricia-peck',
    name: 'Dra. Patricia Peck Pinheiro',
    title: 'Patrona de Direito Digital e Inteligência Artificial',
    role: 'PhD pela USP, Conselheira Titular do CNPD e Pioneira em Direito Digital no Brasil',
    bio: 'Advogada especialista em Direito Digital, Cibersegurança e Proteção de Dados mais premiada do Brasil. Conselheira do Conselho Nacional de Proteção de Dados (CNPD), professora e conferencista internacional.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    specialities: ['Direito Digital', 'LGPD & Privacidade', 'Segurança da Informação', 'Inteligência Artificial'],
    notableWorks: [
      'Direito Digital (7ª Edição)',
      'Guia Prático de Implementação da LGPD',
      'Manual de Cibersegurança e Governança Corporativa'
    ],
    quote: 'A advocacia do futuro já chegou. Quem domina Direito Digital e Inteligência Artificial na EBRADI se posiciona na vanguarda da profissão.'
  },
  {
    id: 'renato-saraiva',
    name: 'Prof. Renato Saraiva',
    title: 'Referência em OAB e Prática Trabalhista',
    role: 'Ex-Procurador do Trabalho, Mestre em Direito e Autor de Best-sellers para Concursos e OAB',
    bio: 'Referência absoluta na preparação de candidatos ao Exame de Ordem e concursos públicos na área trabalhista. Autor de dezenas de manuais práticos e idealizador de métodos modernos de aprovação.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    specialities: ['Direito do Trabalho', 'Processo do Trabalho', 'Prática Forense Trabalhista', 'Metodologia OAB'],
    notableWorks: [
      'Curso de Direito do Trabalho Aplicado',
      'Prática Trabalhista para OAB e Concursos',
      'Processo do Trabalho na Jurisprudência do TST'
    ],
    quote: 'Aprovação na OAB não é sorte, é método, consistência e orientação de quem conhece o perfil da banca examinadora.'
  },
  {
    id: 'antonio-notariano',
    name: 'Prof. Dr. Antonio Notariano Jr.',
    title: 'Coordenador Geral de Processo Civil',
    role: 'Doutor e Mestre pela PUC-SP, Diretor do IASP e Advogado com 30 anos de atuação',
    bio: 'Reconhecido processualista e advogado contencioso de grandes causas cíveis. Professor convidado de pós-graduações em todo o país e diretor do Instituto dos Advogados de São Paulo.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    specialities: ['Processo Civil Estratégico', 'Recursos nos Tribunais Superiores', 'Direito das Obrigações'],
    notableWorks: [
      'Teoria e Prática dos Recursos Cíveis',
      'Comentários aos Artigos do Código de Processo Civil'
    ],
    quote: 'Na advocacia cível, o domínio técnico do processo é a diferença entre uma tese vencedora e a derrota.'
  }
];
