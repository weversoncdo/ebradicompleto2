import { Testimonial, Article, FAQItem } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dra. Camila Vasconcellos',
    role: 'Sócia de Escritório de Advocacia Tributária',
    course: 'Pós-Graduação em Advocacia Tributária',
    location: 'São Paulo - SP',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'A pós-graduação da EBRADI sob patronagem do Prof. Ives Gandra foi um divisor de águas na minha carreira. As aulas sobre a Reforma Tributária me permitiram fechar contratos de consultoria de alto valor antes mesmo de concluir o curso.',
    tag: 'Carreira e Negócios'
  },
  {
    id: '2',
    name: 'Dr. Lucas Menezes Alencar',
    role: 'Advogado Aprovado no 41º Exame da OAB',
    course: 'Preparatório OAB 1ª e 2ª Fase Penal',
    location: 'Belo Horizonte - MG',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Tinha reprovado duas vezes na 1ª fase antes de conhecer a metodologia da EBRADI. O raio-x com as matérias mais cobradas e os simulados comentados fizeram eu alcançar 58 pontos! Na 2ª fase penal, a correção individualizada foi cirúrgica.',
    tag: 'Aprovação OAB'
  },
  {
    id: '3',
    name: 'Dra. Beatriz Fontana',
    role: 'DPO e Consultora em Cibersegurança',
    course: 'Pós-Graduação em Advocacia no Direito Digital e LGPD',
    location: 'Curitiba - PR',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'O curso ministrado pela Dra. Patricia Peck é incomparável. Todo o conteúdo é 100% voltado para a prática empresarial de proteção de dados e cibersegurança. O certificado nota 5 do MEC e chancelado pela USJT abriu portas imediatas.',
    tag: 'Direito Digital'
  },
  {
    id: '4',
    name: 'Dr. Rodrigo Fagundes',
    role: 'Advogado Cível e Especialista em Família',
    course: 'Pós-Graduação em Advocacia Cível e Família',
    location: 'Porto Alegre - RS',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Ter aulas diretamente com nomes como Maria Helena Diniz e Antonio Notariano Jr. é um privilégio que só a EBRADI oferece no Brasil. A flexibilidade do EAD com alto rigor acadêmico se encaixou perfeitamente na minha rotina forense.',
    tag: 'Advocacia Cível'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Reforma Tributária e o Novo IBS/CBS: O que muda na prática da advocacia fiscal',
    category: 'Direito Tributário',
    date: '02 Mar 2025',
    readTime: '6 min de leitura',
    excerpt: 'Análise detalhada das novas regras do Imposto sobre Bens e Serviços (IBS) e da Contribuição sobre Bens e Serviços (CBS), com apontamentos práticos do Prof. Ives Gandra Martins.',
    author: 'Equipe Jurídica EBRADI',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'art-2',
    title: 'Inteligência Artificial nos Tribunais Superiores: O STF e as novas diretrizes para petições',
    category: 'Inovação & IA',
    date: '28 Fev 2025',
    readTime: '5 min de leitura',
    excerpt: 'Como o uso de IA generativa está sendo regulamentado pelo CNJ e quais cautelas o advogado deve adotar na elaboração de peças recursais e teses jurídicas.',
    author: 'Cátedra de Direito Digital',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'art-3',
    title: 'OAB 1ª Fase: As 5 matérias com maior peso e estratégia para garantir 40+ pontos',
    category: 'Preparatório OAB',
    date: '24 Fev 2025',
    readTime: '4 min de leitura',
    excerpt: 'Estatísticas exclusivas de incidência de temas da banca FGV nas últimas 15 edições do Exame de Ordem. Onde focar nas semanas decisivas de estudo.',
    author: 'Coordenação OAB EBRADI',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Os cursos de Pós-Graduação da EBRADI são reconhecidos pelo MEC?',
    answer: 'Sim! Todos os cursos de pós-graduação lato sensu da EBRADI contam com nota máxima (5) concedida pelo Ministério da Educação (MEC) e são certificados em parceria com a conceituada Universidade São Judas Tadeu (USJT), integrante do Ecossistema Ânima Educação.',
    category: 'Geral'
  },
  {
    question: 'Como funciona a flexibilidade das aulas 100% online?',
    answer: 'Após a confirmação da matrícula, seu acesso à Sala de Aula Virtual EBRADI é liberado imediatamente. As videoaulas gravadas em resolução HD podem ser assistidas a qualquer hora no seu computador, tablet ou celular, complementadas por e-books, simulados, fóruns com professores e mentorias ao vivo periódicas.',
    category: 'Metodologia'
  },
  {
    question: 'O TCC (Trabalho de Conclusão de Curso) é obrigatório?',
    answer: 'De acordo com a Resolução nº 01/2018 do Conselho Nacional de Educação (CNE/MEC), o Trabalho de Conclusão de Curso (TCC) em pós-graduações lato sensu é facultativo. O aluno pode optar por realizá-lo ou dispensá-lo no momento da conclusão do currículo pedagógico.',
    category: 'Certificação'
  },
  {
    question: 'Qual é a política da Garantia de Aprovação no Preparatório OAB?',
    answer: 'Alunos matriculados no preparatório completo para a 1ª fase da OAB que cumprirem ao menos 85% do cronograma proposto e realizarem os simulados da plataforma, caso não obtenham a pontuação mínima de 40 acertos, terão acesso gratuito e renovado para a edição seguinte do Exame.',
    category: 'OAB'
  },
  {
    question: 'Quais são as formas de pagamento e opções de bolsa de estudo?',
    answer: 'A EBRADI oferece condições facilitadas de pagamento: cartão de crédito sem comprometer o limite total (cobrança recorrente mensal), boleto bancário parcelado e desconto especial para pagamentos à vista via Pix. Além disso, disponibilizamos convênios com subseções da OAB, desconto para ex-alunos da rede Ânima e bolsas promocionais.',
    category: 'Matrícula e Pagamento'
  }
];
