import { Testimonial, Article, FAQItem } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dra. Camila Vasconcellos',
    role: 'Sócia de Escritório de Advocacia Tributária',
    course: 'Pós-Graduação em Direito & Processo Tributário',
    location: 'São Paulo - SP',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'A pós-graduação da EBRADI sob patronagem do Prof. Ives Gandra Martins foi o maior divisor de águas na minha carreira jurídica. As aulas práticas sobre a Reforma Tributária e os debates de teses me permitiram fechar contratos de consultoria tributária de alto valor antes mesmo de concluir o curso.',
    tag: 'Carreira & Negócios'
  },
  {
    id: '2',
    name: 'Dr. Lucas Menezes Alencar',
    role: 'Advogado Aprovado no Exame de Ordem',
    course: 'Preparatório OAB 1ª e 2ª Fase Penal',
    location: 'Belo Horizonte - MG',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'Tinha reprovado duas vezes na 1ª fase antes de conhecer a metodologia da EBRADI. O raio-x com as matérias mais cobradas e os simulados comentados em vídeo fizeram eu alcançar 58 pontos! Na 2ª fase penal, a correção individualizada de cada peça processual foi cirúrgica.',
    tag: 'Aprovação OAB'
  },
  {
    id: '3',
    name: 'Dra. Beatriz Fontana',
    role: 'DPO e Consultora em Cibersegurança',
    course: 'Pós-Graduação em Direito Digital, LGPD & IA',
    location: 'Curitiba - PR',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'O curso ministrado sob orientação da Dra. Patricia Peck é incomparável. Todo o conteúdo é 100% voltado para a prática empresarial de proteção de dados, segurança da informação e governança de inteligência artificial. O certificado nota 5 do MEC e chancelado pela USJT abriu portas imediatas no mercado corporativo.',
    tag: 'Direito Digital'
  },
  {
    id: '4',
    name: 'Dr. Rodrigo Fagundes',
    role: 'Advogado Civilista e Especialista em Família',
    course: 'Pós-Graduação em Advocacia Cível e Família',
    location: 'Porto Alegre - RS',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'Ter aulas diretamente com nomes como Profa. Maria Helena Diniz é um privilégio que só a EBRADI oferece. A flexibilidade da plataforma digital aliada ao rigor acadêmico e aos estudos de caso reais se encaixou com perfeição na minha rotina forense diária.',
    tag: 'Advocacia Cível'
  },
  {
    id: '5',
    name: 'Dra. Juliana Mendes Silveira',
    role: 'Advogada Trabalhista e Negociadora Coletiva',
    course: 'Pós-Graduação em Direito & Processo do Trabalho',
    location: 'Rio de Janeiro - RJ',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'O curso coordenado pelo Prof. Renato Saraiva transformou a minha forma de atuar nas audiências e recursos no TRT e TST. O foco prático em cálculos rescisórios, audiências telepresenciais e estratégias de sustentação oral me deu a segurança necessária para expandir meu escritório.',
    tag: 'Direito do Trabalho'
  },
  {
    id: '6',
    name: 'Dr. Marcos Aurélio Prado',
    role: 'Defensor Público & Especialista em Ciências Penais',
    course: 'Pós-Graduação em Direito Penal e Criminologia',
    location: 'Brasília - DF',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'A profundidade doutrinária das aulas do Desembargador Guilherme Nucci e demais professores é simplesmente fantástica. O conteúdo aborda desde a investigação defensiva preliminar até teses de plenário do Júri e Habeas Corpus nos Tribunais Superiores.',
    tag: 'Direito Penal'
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
    title: 'Inteligência Artificial no Processo Civil: Validade probatória e limites éticos',
    category: 'Direito Digital & Processo',
    date: '28 Fev 2025',
    readTime: '8 min de leitura',
    excerpt: 'Como juízes e tribunais têm acolhido provas digitais e minutas assistidas por IA, à luz das recentes diretrizes do Conselho Nacional de Justiça (CNJ).',
    author: 'Dra. Patricia Peck Pinheiro',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'art-3',
    title: 'Checklist para a 2ª Fase OAB: Estrutura de Peça Prático-Profissional Nota 5',
    category: 'Exame de Ordem',
    date: '25 Fev 2025',
    readTime: '5 min de leitura',
    excerpt: 'Passo a passo definitivo para não zerar a peça e garantir a pontuação máxima no endereçamento, fundamentação jurídica e pedidos.',
    author: 'Prof. Renato Saraiva',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Os cursos de pós-graduação da EBRADI são reconhecidos pelo MEC?',
    answer: 'Sim! Todos os cursos de pós-graduação lato sensu da EBRADI são certificados pela Universidade São Judas Tadeu (USJT), instituição credenciada pelo Ministério da Educação (MEC) com a Nota Máxima 5. Seu certificado possui validade nacional para títulos em concursos, progressão funcional e prática jurídica.',
    category: 'Geral & Certificação'
  },
  {
    question: 'Qual é a duração dos cursos de pós-graduação?',
    answer: 'Nossos cursos possuem carga horária de 360 horas a 420 horas, podendo ser concluídos em um prazo flexível de 6 a 12 meses, conforme o seu ritmo de estudo e disponibilidade.',
    category: 'Pós-Graduação'
  },
  {
    question: 'Como funciona o Preparatório OAB com garantia de aprovação?',
    answer: 'O preparatório conta com diagnóstico individual de pontos fracos, cronogramas de estudo semanais, videoaulas direcionadas aos temas estatisticamente mais cobrados pela FGV e correção individualizada de peças na 2ª fase. Se você cumprir 85% do cronograma e não for aprovado, seu acesso é renovado gratuitamente para o exame seguinte.',
    category: 'OAB'
  },
  {
    question: 'Posso solicitar bolsa de estudos ou desconto para ex-alunos e OAB?',
    answer: 'Sim. A EBRADI concede descontos institucionais para inscritos na OAB, associados de sindicatos parceiros, ex-alunos da rede Ânima e candidatos que utilizarem o Simulador de Bolsas online, com descontos de até 50%.',
    category: 'Matrícula & Bolsas'
  },
  {
    question: 'O Trabalho de Conclusão de Curso (TCC) é obrigatório na pós-graduação?',
    answer: 'Conforme a Resolução CNE/CES nº 01/2018 do Ministério da Educação, o TCC é optativo na grande maioria dos cursos de pós-graduação lato sensu. O aluno pode optar por realizá-lo caso deseje pontuação extra em determinados concursos públicos.',
    category: 'Pós-Graduação'
  }
];
