import { Cpu, Code, Palette, Globe, Heart, Megaphone, Terminal, Database, Languages, Activity, Music, Camera, DollarSign, Brain } from 'lucide-react';
import { Category, Course, CourseLevel, Plan, Faq } from './types';

export const CATEGORIES: Category[] = [
  { 
    id: '1', 
    name: 'Inteligência Artificial', 
    slug: 'ai', 
    icon: Brain, 
    description: 'Domine o futuro com Machine Learning, Deep Learning e LLMs.' 
  },
  { 
    id: '2', 
    name: 'Programação', 
    slug: 'programming', 
    icon: Terminal, 
    description: 'Desenvolvimento Full-Stack, Java, C++, Python e mais.' 
  },
  { 
    id: '3', 
    name: 'Design & Motion', 
    slug: 'design', 
    icon: Palette, 
    description: 'UX/UI, Design Gráfico, Motion Design e Edição de Vídeo.' 
  },
  { 
    id: '4', 
    name: 'Idiomas', 
    slug: 'languages', 
    icon: Globe, 
    description: 'Inglês, Espanhol, Russo e Português para negócios.' 
  },
  { 
    id: '5', 
    name: 'Saúde & Bem-Estar', 
    slug: 'health', 
    icon: Heart, 
    description: 'Meditação, Nutrição, Yoga e Saúde Mental.' 
  },
  { 
    id: '6', 
    name: 'Marketing Digital', 
    slug: 'marketing', 
    icon: Megaphone, 
    description: 'SEO, Social Media, Tráfego Pago e Branding.' 
  }
];

export const COURSES: Course[] = [
  // --- IA (8 Cursos) ---
  {
    id: 'ai-1',
    title: 'Mestrado em Engenharia de Prompt & ChatGPT',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    price: 0,
    rating: 4.9,
    students: 15420,
    level: CourseLevel.Iniciante,
    duration: '12h',
    instructor: { name: 'Dr. Alan Silva', role: 'AI Researcher', avatar: 'https://i.pravatar.cc/150?u=alan' },
    fullDescription: 'Aprenda a extrair o máximo das IAs generativas. Um curso completo sobre como estruturar prompts profissionais para texto, código e imagem.',
    modules: ['Fundamentos de LLMs', 'Estrutura de Prompts', 'Automação de Tarefas', 'Projetos Práticos']
  },
  {
    id: 'ai-2',
    title: 'Python para Data Science e Machine Learning',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    price: 199.90,
    rating: 4.8,
    students: 8500,
    level: CourseLevel.Intermediario,
    duration: '45h',
    instructor: { name: 'Julia Chen', role: 'Data Scientist', avatar: 'https://i.pravatar.cc/150?u=julia' },
    fullDescription: 'Do zero ao deploy. Aprenda Pandas, NumPy, Scikit-learn e crie seus próprios modelos preditivos de alta precisão.',
    modules: ['Python Base', 'Análise de Dados', 'Algoritmos de ML', 'Deploy de Modelos']
  },
  {
    id: 'ai-3',
    title: 'Deep Learning com TensorFlow e Keras',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
    price: 249.90,
    rating: 5.0,
    students: 3200,
    level: CourseLevel.Avancado,
    duration: '60h',
    instructor: { name: 'Roberto Ford', role: 'AI Engineer', avatar: 'https://i.pravatar.cc/150?u=rob' },
    fullDescription: 'Construa redes neurais profundas para visão computacional e processamento de linguagem natural.',
    modules: ['Redes Neurais', 'CNNs', 'RNNs e LSTMs', 'Projetos de Visão Computacional']
  },
  {
    id: 'ai-4',
    title: 'Ética em IA e Regulação Global',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1000&auto=format&fit=crop',
    price: 0,
    rating: 4.7,
    students: 1200,
    level: CourseLevel.Iniciante,
    duration: '8h',
    instructor: { name: 'Sarah Connor', role: 'Tech Ethicist', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    fullDescription: 'Entenda os desafios éticos, viés algorítmico e as novas regulações globais sobre IA.',
    modules: ['Introdução à Ética', 'Viés em Dados', 'Legislação Global', 'IA Responsável']
  },
  {
    id: 'ai-5',
    title: 'Visão Computacional com OpenCV',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1535378437327-b714923e7f52?q=80&w=1000&auto=format&fit=crop',
    price: 159.90,
    rating: 4.8,
    students: 2800,
    level: CourseLevel.Intermediario,
    duration: '32h',
    instructor: { name: 'Kenji Sato', role: 'CV Engineer', avatar: 'https://i.pravatar.cc/150?u=kenji' },
    fullDescription: 'Aprenda a fazer máquinas "verem". Detecção de faces, objetos e reconhecimento de padrões em tempo real.',
    modules: ['Processamento de Imagem', 'Detecção de Faces', 'YOLO e Object Detection', 'Rastreamento']
  },
  {
    id: 'ai-6',
    title: 'IA Generativa para Negócios',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    price: 299.00,
    rating: 4.9,
    students: 1500,
    level: CourseLevel.Avancado,
    duration: '20h',
    instructor: { name: 'Amanda Boss', role: 'Business Analyst', avatar: 'https://i.pravatar.cc/150?u=amanda' },
    fullDescription: 'Como implementar soluções de IA na sua empresa para aumentar produtividade e reduzir custos.',
    modules: ['Estratégia de IA', 'Ferramentas Corporativas', 'Automação de Processos', 'Case Studies']
  },
  {
    id: 'ai-7',
    title: 'NLP: Processamento de Linguagem Natural',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1555421689-4917d7d7962b?q=80&w=1000&auto=format&fit=crop',
    price: 180.00,
    rating: 4.7,
    students: 4100,
    level: CourseLevel.Intermediario,
    duration: '40h',
    instructor: { name: 'Lucas Text', role: 'NLP Specialist', avatar: 'https://i.pravatar.cc/150?u=lucas' },
    fullDescription: 'Crie chatbots, analise sentimentos e resuma textos automaticamente com as tecnologias mais modernas.',
    modules: ['Tokenização', 'Análise de Sentimento', 'Transformers & BERT', 'Criação de Chatbots']
  },
  {
    id: 'ai-8',
    title: 'Robótica e IA: O Futuro da Automação',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop',
    price: 220.00,
    rating: 4.8,
    students: 1900,
    level: CourseLevel.Avancado,
    duration: '55h',
    instructor: { name: 'Elon M.', role: 'Robotics Engineer', avatar: 'https://i.pravatar.cc/150?u=elon' },
    fullDescription: 'Integração de hardware e software. Aprenda a programar robôs inteligentes que tomam decisões.',
    modules: ['Sensores e Atuadores', 'ROS (Robot Operating System)', 'Navegação Autônoma', 'Slam']
  },

  // --- PROGRAMAÇÃO (9 Cursos) ---
  {
    id: 'prog-1',
    title: 'Java Completo 2025: POO ao Spring Boot',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
    price: 149.90,
    rating: 4.8,
    students: 12500,
    level: CourseLevel.Intermediario,
    duration: '80h',
    instructor: { name: 'Nelio Alves', role: 'Java Champion', avatar: 'https://i.pravatar.cc/150?u=nelio' },
    fullDescription: 'O curso definitivo de Java. Domine a orientação a objetos e construa APIs robustas com Spring Boot.',
    modules: ['Lógica de Programação', 'Java POO', 'Spring Boot', 'Microserviços']
  },
  {
    id: 'prog-2',
    title: 'C++ Moderno para Jogos e Alta Performance',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop',
    price: 129.90,
    rating: 4.9,
    students: 5400,
    level: CourseLevel.Avancado,
    duration: '50h',
    instructor: { name: 'John Carmack Fan', role: 'Game Dev', avatar: 'https://i.pravatar.cc/150?u=john' },
    fullDescription: 'Aprenda C++ moderno (17/20) focado em otimização de memória e desenvolvimento de engines de jogos.',
    modules: ['Ponteiros e Memória', 'STL', 'Templates', 'Unreal Engine Básico']
  },
  {
    id: 'prog-3',
    title: 'Desenvolvimento Web Fullstack com React & Node',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
    price: 0,
    rating: 4.7,
    students: 25000,
    level: CourseLevel.Iniciante,
    duration: '35h',
    instructor: { name: 'Diego Shell', role: 'CTO', avatar: 'https://i.pravatar.cc/150?u=diego' },
    fullDescription: 'Crie aplicações web modernas do zero. HTML, CSS, JavaScript, ReactHooks e Node.js.',
    modules: ['Frontend Moderno', 'React Avançado', 'Backend com Node', 'Banco de Dados SQL']
  },
  {
    id: 'prog-4',
    title: 'DevOps: Docker, Kubernetes e Azure',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1667372393119-c81c0cda0a29?q=80&w=1000&auto=format&fit=crop',
    price: 210.00,
    rating: 4.8,
    students: 6700,
    level: CourseLevel.Avancado,
    duration: '45h',
    instructor: { name: 'Cloud Master', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?u=cloud' },
    fullDescription: 'Automatize o ciclo de vida do software. CI/CD, Containerização e Orquestração em nuvem.',
    modules: ['Docker Containers', 'Kubernetes Orchestration', 'CI/CD Pipelines', 'Azure Cloud']
  },
  {
    id: 'prog-5',
    title: 'Python para Automação de Tarefas',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1000&auto=format&fit=crop',
    price: 89.90,
    rating: 4.6,
    students: 11000,
    level: CourseLevel.Iniciante,
    duration: '15h',
    instructor: { name: 'Ana Py', role: 'Pythonista', avatar: 'https://i.pravatar.cc/150?u=ana' },
    fullDescription: 'Pare de fazer tarefas chatas. Aprenda a criar scripts para ler planilhas, enviar emails e raspar dados da web.',
    modules: ['Sintaxe Básica', 'Manipulação de Arquivos', 'Web Scraping', 'Automação de GUI']
  },
  {
    id: 'prog-6',
    title: 'Desenvolvimento Mobile com Flutter',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b5bbb695?q=80&w=1000&auto=format&fit=crop',
    price: 130.00,
    rating: 4.8,
    students: 7500,
    level: CourseLevel.Intermediario,
    duration: '40h',
    instructor: { name: 'Fernando Dart', role: 'Mobile Dev', avatar: 'https://i.pravatar.cc/150?u=fernando' },
    fullDescription: 'Crie apps nativos para Android e iOS com uma única base de código usando Flutter e Dart.',
    modules: ['Dart Lang', 'Widgets Flutter', 'Gerência de Estado', 'Publicação nas Lojas']
  },
  {
    id: 'prog-7',
    title: 'Cibersegurança: Ethical Hacking',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=1000&auto=format&fit=crop',
    price: 250.00,
    rating: 4.9,
    students: 4200,
    level: CourseLevel.Avancado,
    duration: '50h',
    instructor: { name: 'Mr. Robot', role: 'Security Analyst', avatar: 'https://i.pravatar.cc/150?u=robot' },
    fullDescription: 'Aprenda a pensar como um hacker para defender sistemas. Pentest, redes e criptografia.',
    modules: ['Redes e Protocolos', 'Kali Linux', 'Pentesting Web', 'Criptografia']
  },
  {
    id: 'prog-8',
    title: 'Rust: Programação de Sistemas Segura',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1000&auto=format&fit=crop',
    price: 180.00,
    rating: 5.0,
    students: 2100,
    level: CourseLevel.Avancado,
    duration: '35h',
    instructor: { name: 'Ferris Crab', role: 'Rustacean', avatar: 'https://i.pravatar.cc/150?u=ferris' },
    fullDescription: 'A linguagem mais amada pelos desenvolvedores. Performance de C++ com segurança de memória garantida.',
    modules: ['Ownership & Borrowing', 'Lifetimes', 'Concurrency', 'WebAssembly']
  },
  {
    id: 'prog-9',
    title: 'Go (Golang) para Backend Escalável',
    category: 'programming',
    image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1000&auto=format&fit=crop',
    price: 145.00,
    rating: 4.7,
    students: 3300,
    level: CourseLevel.Intermediario,
    duration: '30h',
    instructor: { name: 'Google Expert', role: 'Backend Eng.', avatar: 'https://i.pravatar.cc/150?u=google' },
    fullDescription: 'Aprenda a linguagem do Google para criar microsserviços rápidos e concorrentes.',
    modules: ['Goroutines', 'Channels', 'APIs RESTful', 'Arquitetura Limpa']
  },

  // --- DESIGN (8 Cursos) ---
  {
    id: 'des-1',
    title: 'Motion Design Profissional com After Effects',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    price: 189.90,
    rating: 5.0,
    students: 4500,
    level: CourseLevel.Intermediario,
    duration: '40h',
    instructor: { name: 'Alina Motion', role: 'Senior Motion Designer', avatar: 'https://i.pravatar.cc/150?u=alina' },
    fullDescription: 'Dê vida às suas ilustrações. Aprenda os 12 princípios da animação aplicados ao After Effects.',
    modules: ['Interface do AE', 'Keyframes', 'Graph Editor', 'Efeitos Visuais']
  },
  {
    id: 'des-2',
    title: 'UX/UI Design: Do Briefing ao Protótipo',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=1000&auto=format&fit=crop',
    price: 0,
    rating: 4.8,
    students: 9800,
    level: CourseLevel.Iniciante,
    duration: '25h',
    instructor: { name: 'Figma Master', role: 'Product Designer', avatar: 'https://i.pravatar.cc/150?u=ux' },
    fullDescription: 'Aprenda a criar interfaces intuitivas e bonitas que os usuários amam usar.',
    modules: ['Design Thinking', 'Wireframing', 'Figma Avançado', 'Sistemas de Design']
  },
  {
    id: 'des-3',
    title: 'Design Gráfico Completo com Photoshop',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1000&auto=format&fit=crop',
    price: 89.90,
    rating: 4.6,
    students: 15000,
    level: CourseLevel.Iniciante,
    duration: '30h',
    instructor: { name: 'Carlos Arts', role: 'Art Director', avatar: 'https://i.pravatar.cc/150?u=carlos' },
    fullDescription: 'Domine a ferramenta mais famosa do mundo para edição de imagens e criação publicitária.',
    modules: ['Ferramentas Básicas', 'Tratamento de Pele', 'Recorte Avançado', 'Composição']
  },
  {
    id: 'des-4',
    title: 'Modelagem 3D com Blender',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop',
    price: 110.00,
    rating: 4.9,
    students: 6000,
    level: CourseLevel.Intermediario,
    duration: '45h',
    instructor: { name: 'Donut Guru', role: '3D Artist', avatar: 'https://i.pravatar.cc/150?u=donut' },
    fullDescription: 'Crie mundos inteiros no software 3D gratuito mais poderoso do mercado. Modelagem, textura e render.',
    modules: ['Interface Blender', 'Modelagem Hard Surface', 'Shaders e Materiais', 'Render Cycles/Eevee']
  },
  {
    id: 'des-5',
    title: 'Edição de Vídeo Cinematográfica (Premiere Pro)',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1574717436423-a75a687a3ca2?q=80&w=1000&auto=format&fit=crop',
    price: 125.00,
    rating: 4.7,
    students: 5200,
    level: CourseLevel.Intermediario,
    duration: '28h',
    instructor: { name: 'Sam Kolder Fan', role: 'Video Editor', avatar: 'https://i.pravatar.cc/150?u=sam' },
    fullDescription: 'Transforme gravações brutas em histórias emocionantes. Técnicas de corte, cor e som.',
    modules: ['Organização de Projeto', 'Narrativa Visual', 'Color Grading', 'Sound Design']
  },
  {
    id: 'des-6',
    title: 'Tipografia e Teoria das Cores',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
    price: 60.00,
    rating: 4.5,
    students: 3100,
    level: CourseLevel.Iniciante,
    duration: '10h',
    instructor: { name: 'Typo King', role: 'Graphic Designer', avatar: 'https://i.pravatar.cc/150?u=typo' },
    fullDescription: 'Os fundamentos essenciais que todo designer precisa saber antes de abrir o software.',
    modules: ['Anatomia do Tipo', 'Psicologia das Cores', 'Hierarquia Visual', 'Grid Layout']
  },
  {
    id: 'des-7',
    title: 'Ilustração Digital com Procreate',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1615155106679-376d15b1386d?q=80&w=1000&auto=format&fit=crop',
    price: 95.00,
    rating: 4.9,
    students: 4800,
    level: CourseLevel.Iniciante,
    duration: '18h',
    instructor: { name: 'Nina Art', role: 'Illustrator', avatar: 'https://i.pravatar.cc/150?u=nina' },
    fullDescription: 'Aprenda a desenhar no iPad. Técnicas de esboço, pintura digital e acabamento.',
    modules: ['Ferramentas Procreate', 'Esboço e Lineart', 'Luz e Sombra', 'Pintura Digital']
  },
  {
    id: 'des-8',
    title: 'Web Design Responsivo (HTML/CSS Visual)',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    price: 75.00,
    rating: 4.6,
    students: 7000,
    level: CourseLevel.Iniciante,
    duration: '22h',
    instructor: { name: 'Web Flow', role: 'Web Designer', avatar: 'https://i.pravatar.cc/150?u=web' },
    fullDescription: 'Entenda como o design se comporta na web. Layouts flexíveis, media queries e acessibilidade.',
    modules: ['Box Model', 'Flexbox & Grid', 'Mobile First', 'Acessibilidade Web']
  },

  // --- IDIOMAS (7 Cursos) ---
  {
    id: 'lang-1',
    title: 'Inglês para Desenvolvedores',
    category: 'languages',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop',
    price: 0,
    rating: 4.9,
    students: 30000,
    level: CourseLevel.Iniciante,
    duration: '20h',
    instructor: { name: 'Mike Teacher', role: 'English Coach', avatar: 'https://i.pravatar.cc/150?u=mike' },
    fullDescription: 'Focado em vocabulário técnico, leitura de documentação e entrevistas de emprego internacionais.',
    modules: ['Tech Vocabulary', 'Reading Docs', 'Daily Stand-up', 'Job Interview Prep']
  },
  {
    id: 'lang-2',
    title: 'Espanhol Intensivo para Viagens',
    category: 'languages',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop',
    price: 79.90,
    rating: 4.7,
    students: 5000,
    level: CourseLevel.Iniciante,
    duration: '15h',
    instructor: { name: 'Maria Garcia', role: 'Native Speaker', avatar: 'https://i.pravatar.cc/150?u=maria' },
    fullDescription: 'Aprenda a se comunicar em países hispanofalantes de forma rápida e eficiente.',
    modules: ['Saudações e Básico', 'No Aeroporto', 'Restaurantes', 'Pedindo Direções']
  },
  {
    id: 'lang-3',
    title: 'Russo Básico: Alfabeto e Primeiras Palavras',
    category: 'languages',
    image: 'https://images.unsplash.com/photo-1547448527-1975e9f72665?q=80&w=1000&auto=format&fit=crop',
    price: 99.90,
    rating: 4.8,
    students: 1200,
    level: CourseLevel.Iniciante,
    duration: '18h',
    instructor: { name: 'Ivan Petrov', role: 'Linguist', avatar: 'https://i.pravatar.cc/150?u=ivan' },
    fullDescription: 'Desmistifique o alfabeto cirílico e aprenda a estrutura básica da língua russa.',
    modules: ['Alfabeto Cirílico', 'Fonética', 'Gramática Básica', 'Cultura Russa']
  },
  {
    id: 'lang-4',
    title: 'Francês para Gastronomia',
    category: 'languages',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
    price: 110.00,
    rating: 4.6,
    students: 2300,
    level: CourseLevel.Iniciante,
    duration: '12h',
    instructor: { name: 'Chef Pierre', role: 'Chef & Teacher', avatar: 'https://i.pravatar.cc/150?u=pierre' },
    fullDescription: 'Vocabulário essencial para quem ama culinária ou quer trabalhar em restaurantes franceses.',
    modules: ['Utensílios e Ingredientes', 'Técnicas Culinárias', 'Lendo Receitas', 'No Restaurante']
  },
  {
    id: 'lang-5',
    title: 'Mandarim para Negócios (Básico)',
    category: 'languages',
    image: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=1000&auto=format&fit=crop',
    price: 150.00,
    rating: 4.7,
    students: 1800,
    level: CourseLevel.Iniciante,
    duration: '30h',
    instructor: { name: 'Li Wei', role: 'Business Teacher', avatar: 'https://i.pravatar.cc/150?u=li' },
    fullDescription: 'Introdução ao chinês focado no ambiente corporativo e importação/exportação.',
    modules: ['Tons e Pinyin', 'Cumprimentos Formais', 'Números e Moeda', 'Negociação Básica']
  },
  {
    id: 'lang-6',
    title: 'Italiano: Arte e Cultura',
    category: 'languages',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop',
    price: 85.00,
    rating: 4.8,
    students: 3500,
    level: CourseLevel.Iniciante,
    duration: '20h',
    instructor: { name: 'Giulia Roma', role: 'Historian', avatar: 'https://i.pravatar.cc/150?u=giulia' },
    fullDescription: 'Aprenda a língua de Dante através da arte, música e história da Itália.',
    modules: ['Pronúncia Italiana', 'Vocabulário de Arte', 'Viagem pela Itália', 'Expressões Comuns']
  },
  {
    id: 'lang-7',
    title: 'Português Brasileiro para Estrangeiros',
    category: 'languages',
    image: 'https://images.unsplash.com/photo-1483104879057-33a5ea13c1e9?q=80&w=1000&auto=format&fit=crop',
    price: 60.00,
    rating: 4.9,
    students: 6000,
    level: CourseLevel.Iniciante,
    duration: '25h',
    instructor: { name: 'João Brazil', role: 'Professor', avatar: 'https://i.pravatar.cc/150?u=joao' },
    fullDescription: 'Curso completo de português do Brasil para falantes de inglês e espanhol.',
    modules: ['Sons Nasais', 'Gírias Brasileiras', 'Cultura e Música', 'Gramática Essencial']
  },

  // --- SAÚDE (7 Cursos) ---
  {
    id: 'hlt-1',
    title: 'Mindfulness e Gestão de Estresse',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    price: 0,
    rating: 4.9,
    students: 8900,
    level: CourseLevel.Iniciante,
    duration: '10h',
    instructor: { name: 'Lia Zen', role: 'Yoga Master', avatar: 'https://i.pravatar.cc/150?u=lia' },
    fullDescription: 'Técnicas práticas de meditação para reduzir a ansiedade e aumentar o foco no trabalho.',
    modules: ['Respiração', 'Body Scan', 'Meditação Guiada', 'Rotina Matinal']
  },
  {
    id: 'hlt-2',
    title: 'Nutrição Esportiva: Ciência e Prática',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop',
    price: 120.00,
    rating: 4.7,
    students: 3400,
    level: CourseLevel.Intermediario,
    duration: '25h',
    instructor: { name: 'Dr. Pedro Fit', role: 'Nutricionista', avatar: 'https://i.pravatar.cc/150?u=pedro' },
    fullDescription: 'Entenda como os macronutrientes funcionam e monte dietas para alta performance.',
    modules: ['Bioquímica Básica', 'Macronutrientes', 'Suplementação', 'Planejamento de Cardápio']
  },
  {
    id: 'hlt-3',
    title: 'Yoga para Iniciantes: Flexibilidade e Força',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=1000&auto=format&fit=crop',
    price: 59.90,
    rating: 4.8,
    students: 7200,
    level: CourseLevel.Iniciante,
    duration: '15h',
    instructor: { name: 'Sarah Yogi', role: 'Instructor', avatar: 'https://i.pravatar.cc/150?u=sarah2' },
    fullDescription: 'Comece sua jornada no Yoga. Melhore sua postura, flexibilidade e conexão mente-corpo.',
    modules: ['Saudação ao Sol', 'Posturas de Pé', 'Equilíbrio', 'Relaxamento']
  },
  {
    id: 'hlt-4',
    title: 'Neurociência do Aprendizado',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1000&auto=format&fit=crop',
    price: 140.00,
    rating: 4.9,
    students: 2100,
    level: CourseLevel.Avancado,
    duration: '20h',
    instructor: { name: 'Dr. Brain', role: 'Neurocientista', avatar: 'https://i.pravatar.cc/150?u=brain' },
    fullDescription: 'Como o cérebro aprende? Técnicas baseadas em ciência para estudar melhor e reter informação.',
    modules: ['Plasticidade Neural', 'Memória e Sono', 'Foco e Atenção', 'Técnicas de Estudo']
  },
  {
    id: 'hlt-5',
    title: 'Ergonomia para Trabalho Remoto',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop',
    price: 45.00,
    rating: 4.6,
    students: 1500,
    level: CourseLevel.Iniciante,
    duration: '5h',
    instructor: { name: 'Fisio Carla', role: 'Fisioterapeuta', avatar: 'https://i.pravatar.cc/150?u=carla' },
    fullDescription: 'Evite dores nas costas e lesões. Ajuste seu setup de home office para máxima saúde.',
    modules: ['Cadeira e Mesa', 'Posição do Monitor', 'Alongamentos Rápidos', 'Iluminação']
  },
  {
    id: 'hlt-6',
    title: 'Calistenia: Treino com Peso do Corpo',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop',
    price: 80.00,
    rating: 4.8,
    students: 4000,
    level: CourseLevel.Iniciante,
    duration: '18h',
    instructor: { name: 'Bar Brothers', role: 'Coach', avatar: 'https://i.pravatar.cc/150?u=bar' },
    fullDescription: 'Fique forte sem academia. Exercícios de progressão para dominar seu próprio peso.',
    modules: ['Fundamentos (Flexão/Barra)', 'Core Training', 'Progressões', 'Rotinas Semanais']
  },
  {
    id: 'hlt-7',
    title: 'Biohacking e Longevidade',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    price: 199.00,
    rating: 4.7,
    students: 1100,
    level: CourseLevel.Avancado,
    duration: '22h',
    instructor: { name: 'Dave A.', role: 'Biohacker', avatar: 'https://i.pravatar.cc/150?u=dave' },
    fullDescription: 'Otimize sua biologia. Sono, luz, jejum e suplementos para viver mais e melhor.',
    modules: ['Ritmo Circadiano', 'Jejum Intermitente', 'Hormese (Frio/Calor)', 'Suplementação Avançada']
  },

  // --- MARKETING (7 Cursos) ---
  {
    id: 'mkt-1',
    title: 'Marketing Digital Completo 2025',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop',
    price: 120.00,
    rating: 4.8,
    students: 18000,
    level: CourseLevel.Iniciante,
    duration: '40h',
    instructor: { name: 'Erico G.', role: 'Marketing Guru', avatar: 'https://i.pravatar.cc/150?u=erico' },
    fullDescription: 'A visão geral que você precisa. Estratégias de inbound, funis de venda e copywriting.',
    modules: ['Personas', 'Jornada do Cliente', 'Funil de Vendas', 'Email Marketing']
  },
  {
    id: 'mkt-2',
    title: 'Google Ads & Analytics: Tráfego Pago',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    price: 160.00,
    rating: 4.9,
    students: 9500,
    level: CourseLevel.Intermediario,
    duration: '35h',
    instructor: { name: 'Adriano Ads', role: 'Traffic Manager', avatar: 'https://i.pravatar.cc/150?u=adriano' },
    fullDescription: 'Domine a maior ferramenta de vendas do mundo. Crie campanhas que convertem e analise os dados.',
    modules: ['Rede de Pesquisa', 'Rede de Display', 'GA4 (Analytics)', 'Otimização de ROI']
  },
  {
    id: 'mkt-3',
    title: 'Social Media Strategy & Instagram',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    price: 90.00,
    rating: 4.7,
    students: 12000,
    level: CourseLevel.Iniciante,
    duration: '20h',
    instructor: { name: 'Bia Influencer', role: 'Social Media', avatar: 'https://i.pravatar.cc/150?u=bia' },
    fullDescription: 'Cresça sua marca nas redes sociais. Criação de conteúdo, reels, stories e engajamento.',
    modules: ['Algoritmo do Instagram', 'Calendário Editorial', 'Criação de Vídeos', 'Comunidade']
  },
  {
    id: 'mkt-4',
    title: 'SEO: Otimização para Motores de Busca',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1000&auto=format&fit=crop',
    price: 140.00,
    rating: 4.8,
    students: 5600,
    level: CourseLevel.Avancado,
    duration: '30h',
    instructor: { name: 'Neil P.', role: 'SEO Expert', avatar: 'https://i.pravatar.cc/150?u=neil' },
    fullDescription: 'Coloque seu site na primeira página do Google sem pagar por anúncios.',
    modules: ['SEO On-Page', 'Link Building', 'SEO Técnico', 'Keyword Research']
  },
  {
    id: 'mkt-5',
    title: 'Copywriting: A Arte de Vender com Palavras',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop',
    price: 110.00,
    rating: 4.9,
    students: 7800,
    level: CourseLevel.Intermediario,
    duration: '15h',
    instructor: { name: 'Paulo Copy', role: 'Copywriter', avatar: 'https://i.pravatar.cc/150?u=paulo' },
    fullDescription: 'Escreva textos persuasivos para anúncios, landing pages e e-mails que vendem milhões.',
    modules: ['Gatilhos Mentais', 'Estrutura AIDA', 'Headlines Magnéticas', 'Storytelling']
  },
  {
    id: 'mkt-6',
    title: 'Branding: Construção de Marca Forte',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
    price: 130.00,
    rating: 4.7,
    students: 3200,
    level: CourseLevel.Avancado,
    duration: '25h',
    instructor: { name: 'Ana Brand', role: 'Brand Manager', avatar: 'https://i.pravatar.cc/150?u=ana2' },
    fullDescription: 'Crie marcas que as pessoas amam e confiam. Identidade visual, tom de voz e propósito.',
    modules: ['Arquétipos de Marca', 'Identidade Visual', 'Posicionamento', 'Gestão de Crise']
  },
  {
    id: 'mkt-7',
    title: 'Growth Hacking para Startups',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    price: 170.00,
    rating: 4.8,
    students: 2500,
    level: CourseLevel.Avancado,
    duration: '20h',
    instructor: { name: 'Sean H.', role: 'Growth Hacker', avatar: 'https://i.pravatar.cc/150?u=sean' },
    fullDescription: 'Estratégias não convencionais para crescimento rápido com baixo orçamento.',
    modules: ['Métricas Pirata (AARRR)', 'Testes A/B', 'Viral Loops', 'Product-Market Fit']
  }
];

export const PLANS: Plan[] = [
  {
    name: 'Start',
    price: 'Grátis',
    features: [
      'Acesso a 3 aulas introdutórias por curso',
      'Comunidade de alunos (Apenas Leitura)',
      'Materiais complementares básicos',
      'Acesso pela Plataforma Web'
    ]
  },
  {
    name: 'Pro Mensal',
    price: 'R$ 89,90/mês',
    features: [
      'Acesso ilimitado a todos os 180+ cursos',
      'Certificados com código de validação',
      'Projetos práticos com correção de IA',
      'Acesso Offline no App (Android & iOS)',
      'Suporte técnico prioritário em 24h',
      'Sem fidelidade, cancele quando quiser'
    ]
  },
  {
    name: 'Pro Anual',
    price: 'R$ 59,90/mês',
    features: [
      'Economia de R$ 360,00 ao ano',
      'Todas as vantagens do plano Mensal',
      'Mentoria de Carreira Individual (1x/mês)',
      'Análise de LinkedIn e Currículo',
      'Masterclasses ao vivo com Experts',
      'Acesso antecipado a novas ferramentas de IA'
    ],
    recommended: true
  }
];

export const FAQS: Faq[] = [
  {
    question: 'Os cursos possuem certificado reconhecido?',
    answer: 'Sim! Todos os nossos cursos pagos e gratuitos emitem certificado digital com código de validação único, aceito em universidades e empresas em todo o território nacional.'
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer: 'Se você assinar qualquer plano pago e não ficar satisfeito, basta enviar um e-mail dentro de 7 dias que devolvemos 100% do seu dinheiro, sem perguntas.'
  },
  {
    question: 'Posso assistir as aulas pelo celular?',
    answer: 'Com certeza. Nossa plataforma é 100% responsiva e também possuímos um aplicativo para Android e iOS onde você pode baixar as aulas para assistir offline.'
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos cartão de crédito em até 12x, PIX com 5% de desconto e boleto bancário.'
  },
  {
    question: 'Preciso de conhecimento prévio?',
    answer: 'A maioria dos nossos cursos possui nível iniciante (do zero). Cursos intermediários e avançados especificam os pré-requisitos na descrição.'
  },
  {
    question: 'O acesso ao curso expira?',
    answer: 'No plano Pro (Mensal ou Anual), você tem acesso enquanto a assinatura estiver ativa. Cursos gratuitos comprados separadamente são vitalícios.'
  }
];