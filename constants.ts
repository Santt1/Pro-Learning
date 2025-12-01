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
    image: 'https://embarcados.com.br/wp-content/uploads/2016/12/vis%C3%A3o-computacional-com-opencv-destaque.jpg',
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
    image: 'https://3dot14.com.br/wp-content/uploads/2021/12/processamento-de-linguagem-natural-3dot14-1-optimized.png',
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
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQHKyP0hizMyuQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708400397764?e=2147483647&v=beta&t=HbYEoUlJOtwwiHf1aLzJyBmUwCUTIsO5LS6c0_Wqadg',
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
    image: 'https://coodesh.com/blog/wp-content/uploads/2021/10/mobile-flutter-1-1152x648.jpg',
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
    image: 'https://img-c.udemycdn.com/course/750x422/5062800_5b86_2.jpg',
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
    image: 'https://img-c.udemycdn.com/course/750x422/2058291_7403_2.jpg',
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
    image: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/SWNCD-Pr-Pro-pod4?$pjpeg$&jpegSize=100&wid=584',
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
    image: 'data:image/jpeg;base64,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',
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
    image: 'https://mf.b37mrtl.ru/rbthmedia/images/2022.08/original/630369079d95c8123c5335cf.jpg',
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
    image: 'data:image/jpeg;base64,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',
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
    image: 'data:image/jpeg;base64,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',
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
    image: 'data:image/jpeg;base64,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',
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
      'Acesso ilimitado a todos os 50+ cursos',
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