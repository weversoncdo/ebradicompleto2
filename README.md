# EBRADI - Escola Brasileira de Direito (Clone Detalhado)

> Portal educacional e institucional da **EBRADI (Escola Brasileira de Direito)**, instituição de referência nacional em Pós-Graduação Jurídica lato sensu com **Nota Máxima 5 no MEC**, Preparatórios para a OAB (1ª e 2ª Fase), Cursos de Extensão e Prática Forense com os maiores juristas do Brasil.

---

## 🏛️ Sobre o Projeto

Este projeto é uma réplica rica, moderna e detalhada do portal [https://www.ebradi.com.br/](https://www.ebradi.com.br/), desenvolvida com foco em fidelidade visual, identidade institucional (Navy `#0b1b36`, vermelho `#dc2626` e dourado acadêmico), excelência tipográfica (*Cinzel* e *Plus Jakarta Sans*) e interatividade completa.

### ✨ Principais Funcionalidades Implementadas

1. **Barra Superior Institucional e Contatos**:
   - Avisos de início imediato, nota máxima 5 no MEC, telefones 0800, link direto para WhatsApp e acesso à Área do Aluno.
2. **Hero Banner de Alto Impacto**:
   - Proposta de valor clara, diferenciais acadêmicos, métricas institucionais (+40.000 alunos formados, chancela USJT / Ânima) e **Simulador Rápido de Cursos**.
3. **Catálogo Interativo de Cursos**:
   - Filtros por modalidade: *Pós-Graduação*, *Preparatório OAB*, *Extensão & Prática* e *Direito Digital & IA*.
   - Busca em tempo real por título, área jurídica e corpo docente.
   - Cards com duração, carga horária, selos do MEC, ementa resumida, parcelamento e botões de ação.
4. **Modal de Ementa Detalhada**:
   - Visualização módulo a módulo da estrutura curricular, perfil dos coordenadores e diferenciais de certificação.
5. **Cátedras de Notáveis & Patronos de Honra**:
   - Homenagem e perfil detalhado de juristas ilustres:
     - **Prof. Dr. Ives Gandra da Silva Martins** (Patrono Regente)
     - **Profa. Dra. Maria Helena Diniz** (Direito Civil)
     - **Desembargador Dr. Guilherme de Souza Nucci** (Direito Penal)
     - **Dra. Patricia Peck Pinheiro** (Direito Digital & IA)
     - **Prof. Renato Saraiva** (Prática Trabalhista e OAB)
     - **Prof. Dr. Antonio Notariano Jr.** (Processo Civil)
6. **Ecossistema Preparatório OAB**:
   - Raio-X estatístico das provas da FGV, política de Garantia de Aprovação e detalhamento de turmas para 1ª e 2ª fases.
7. **Simulador Interativo de Bolsas de Estudo**:
   - Cálculo automático de descontos em tempo real com base em convênios OAB, ex-alunos Ânima e inscrições antecipadas.
8. **Simulação da Área do Aluno (SIA / Sala de Aula Virtual)**:
   - Interface autêntica de login com CPF/RA e senha, com feedback de acesso aos módulos acadêmicos.
9. **Modal de Matrícula Online**:
   - Fluxo de inscrição e lead capture com seleção de formas de pagamento (cartão recorrente, Pix com desconto ou boleto parcelado).
10. **Artigos, Notícias & FAQ**:
    - Análises sobre Reforma Tributária, IA nos tribunais e perguntas frequentes sobre credenciamento MEC e TCC.
11. **Guia e Modal Exclusivo para Envio ao GitHub**:
    - Instruções em tela com comandos copy-paste para publicação imediata no repositório GitHub.

---

## 🛠️ Tecnologias e Stack

- **React 19** (Functional components, Hooks modernos)
- **TypeScript 5.8** (Tipagem estrita e robusta)
- **Tailwind CSS 4** (Estilização utilitária de alta fidelidade)
- **Vite 6** (Build rápido e desenvolvimento fluido)
- **Lucide React** (Ícones modernos e consistentes)
- **Motion** (Transições e animações fluidas)

---

## 📂 Estrutura de Arquivos

```text
├── index.html                     # Entrada HTML com fontes Cinzel e Plus Jakarta Sans
├── metadata.json                  # Metadados do app
├── package.json                   # Dependências e scripts
├── vite.config.ts                 # Configuração do Vite e Tailwind
├── tsconfig.json                  # Configuração do TypeScript
├── README.md                      # Documentação oficial do repositório
├── src/
│   ├── main.tsx                   # Ponto de entrada da aplicação React
│   ├── App.tsx                    # Componente mestre integrando todas as seções e modais
│   ├── index.css                  # Estilos globais Tailwind e fontes
│   ├── types.ts                   # Definições de tipos TypeScript (Course, Faculty, etc.)
│   ├── data/
│   │   ├── courses.ts             # Dados detalhados dos cursos da EBRADI
│   │   ├── faculty.ts             # Dados biográficos e obras dos Patronos de Honra
│   │   └── testimonials.ts        # Depoimentos, artigos jurídicos e FAQ
│   └── components/
│       ├── Navbar.tsx             # Barra superior, contatos, logo e menu
│       ├── HeroSection.tsx        # Banner principal e simulador rápido
│       ├── CourseCatalog.tsx      # Catálogo de cursos com busca e filtros
│       ├── CourseDetailModal.tsx  # Modal com ementa pedagógica completa
│       ├── PatronosSection.tsx    # Seção com os grandes juristas do país
│       ├── OabSpecialSection.tsx  # Seção especializada do método OAB
│       ├── MethodologySection.tsx # Os 4 pilares do método EBRADI e nota 5 MEC
│       ├── ScholarshipCalculator.tsx # Simulador interativo de bolsas e descontos
│       ├── TestimonialsSection.tsx# Avaliações e números da instituição
│       ├── ArticlesSection.tsx    # Notícias e artigos jurídicos
│       ├── FaqSection.tsx         # Perguntas frequentes interativas
│       ├── StudentPortalModal.tsx # Simulação da Sala de Aula Virtual
│       ├── EnrollmentModal.tsx    # Modal de matrícula e simulação de pagamento
│       ├── GithubExportModal.tsx  # Modal com comandos e guia para o GitHub
│       └── Footer.tsx             # Rodapé institucional completo com selos
```

---

## 🚀 Como Executar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/ebradi-clone.git
   cd ebradi-clone
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:3000` no seu navegador.

4. **Para gerar o build de produção:**
   ```bash
   npm run build
   ```

---

## 📤 Como Enviar os Arquivos para o seu GitHub

Caso você tenha baixado o projeto do AI Studio e queira criar o repositório no seu GitHub:

```bash
# 1. Inicie o git dentro da pasta do projeto
git init

# 2. Adicione todos os arquivos
git add .

# 3. Crie o primeiro commit
git commit -m "feat: clone detalhado do portal EBRADI com React, TypeScript e Tailwind CSS"

# 4. Defina a branch principal como main
git branch -M main

# 5. Adicione o link do seu repositório remoto criado no GitHub
# (Substitua SEU_USUARIO e ebradi-clone pelo seu usuário e nome do repositório)
git remote add origin https://github.com/SEU_USUARIO/ebradi-clone.git

# 6. Envie os arquivos para o GitHub
git push -u origin main
```

---

## 🌐 Como Publicar no GitHub Pages Sem Erro de Tela Branca

Se a sua página no GitHub Pages (`https://weversoncdo.github.io/ebradicompleto2/`) estiver ficando em branco, é porque projetos React/Vite precisam ser compilados antes de o navegador poder lê-los.

Para resolver com 1 clique usando o **GitHub Actions** já configurado no projeto:

1. No seu repositório no GitHub (`weversoncdo/ebradicompleto2`), clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment > Source**, mude de *"Deploy from a branch"* para **GitHub Actions**.
4. Faça um `git push` (ou clique em Actions > *Deploy to GitHub Pages* > *Run workflow*).
5. Pronto! O GitHub Actions fará o build do Vite automaticamente e o site estará no ar em `https://weversoncdo.github.io/ebradicompleto2/`.

---

## ⚖️ Aviso Legal e Direitos de Marca

Este projeto foi construído para fins educacionais, de demonstração técnica e portfólio de engenharia de software e design de interfaces, reproduzindo a estrutura pública da Escola Brasileira de Direito (EBRADI / Ânima Educação). As marcas e nomes de patronos pertencem aos seus respectivos titulares.
