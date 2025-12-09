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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 60.00,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQDxUPEBIQEBAPDw8PDw8PEBAPDw8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFy0dHR8uLSsrLS0tLSsrLy0rKy0rLS0tKy0tLS0rKy0tLS0tKy0rLS0rLS0tLS0tLS0tKystLf/AABEIAKIBNwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABGEAABAwEEBwMHCQUIAwAAAAABAAIRAxQSITEFBkFRYXGRE1KBIjJCkqHB0QcUFVNicoKx8BYjQ6LhJDNjk6PC0uKDsvH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EACERAQEBAQADAQABBQAAAAAAAAABEQIDEiExQQQTQlFx/9oADAMBAAIRAxEAPwDaQnwiF5NGIToRCBqE6EQgZCIT4RCoZCIT7qeyiTsQQwiFa+bxmmOaghupQ1PupYQPohXaYVSkFdpBWCxsQAnEYJFQJQEAJUBCQhKgoIyhOISQgRIlhV7fbGUKT61Qwym0vdvgbBxOSgsOcAJJAAzJMABVaWlaLsG1Gv4slzPWGHtXi+tOtte1PxN2nMsotm60ThPePE+xaOr2mQKYDpdeIDgDs57ycPwrPVsmx6ccy3K9Sbp2zEwK9IxmQ8XR45KeyWynVF6k9tRskXmEObI2SFwlfR9OtZKrW3Wyx1YmIDREgwmkBIKYkV00pW2vqLpTDpG+yn7COb+rbmcizbY8jp16MHIYnY/pfT3fDIkt7pp74pfGe96/EZfkhzc049Yn+a/wD7+/Tm5uf6esT/ADX/AN/8wFFlnXEtGCrQQKfLUBxfSY1eLGV0/Dpg1ZN775aW2oRS523+OSXNd+SzE71fT/mufnu/JZxzvV9P+a7qXtGr8ec6HOm6N0K5Rf73+HLepL03r9meVx+BvHzScnrLHkZ8D9LlmeSeaWW/2Kcy1vzbk/i222z2Pb0ju48yexZfMy8hXkSHhwc0MWs+0wvdpmb0IWqYOsPyJl2PiFCoZgY2Mx4BukZKxjsYqlr4MpkJIaBpUIQPaaNpgx4hUAZKMMSxArEMJNIEMUKei8CG5ITSntk06tZqCj8hU+HPr25u1lIfkrJMZOO89jcbsx+5rm2cpcf0L3Uv2b+54X6jyeXl8s/+rw/1Dk83L1PiOS6jjeDfZV8ITaj/AGPmP7NHr8PJ9Tjzv8se5wcn1OPO/wAsSii0QU+WjYDoQSw46JDnYl90ue+hhlz5NUcT0ev6a5YqyYbfZOcbo+kU+Jr6J8/khOaTl+nr59v4TnPM830tfPXX8OflCUk5KMnFcuSi3FL5v4HV3J6X3dGtSelvqHaGZVxMaI0Zm9KFp8m+L5EybGoKFekYYFukZTMAWSDFGewh0ztZj5DseE0hmGBrTQNMWMhY8FnkCjGqAqqwxPSDMLFNPc06TXzsnT8l9D6rp2Jlf6buuoyNcQl4coWf28L8b/ACcPiOfm4fumZrH/AH9P9XHyc/PwTzeSax+fXuf6/wAlPUPZC+L9yyqxfPurf45/yHi/U+PU9c2fuh/ifHr+rNn7gV7M5f8ARD6+JEv/ANfwfn9hnj+D8/s7rEpUIQrj+mEIwX0S0eDya82rq+9eJvV3q6vvSrrns3ZkWq2udcN1xjNT7tuSb0+F6a/B2eF8dnhx5NS31el4TxueHHk1LfUD/wBF5H/ko/M1/tOn/FOL/Lf2/l1f4nxf5b+38h+p+z/APDQ7rsiruf/AG6oRlKc399aXzK8PjPra6xi9fNdHhfGfW11jF6+aSs63dXohCOg6PHUd2T5c/PfXoTXkwhPdlUb4/0ynOH4af8AnZPe1Or6zrqp6xrWes68t/7Os6NmUW1PwK/CgpOM6+1L3ml6efGjx/EcfJjf33uvE8Vx8mN/+Jru/lzvtxO1KuKWsZ8tx+NnwT+WuV9zt/T5jvVv8AW6v06Y71b/X/APjkVE9R60ecQHivaYK2qiLTQ0xhCaGRClVZszQDkTMtmAZyGh6qmEIzsZj/AAxYydekA0DWDQmmQU+kMIJiCjlr8AKKMMT08jNBcUJVMQ96dDUdk6G/cB1CXvb+Ke0/imaLZn2mnSfad8V5L38I3/H6T/5/JweI8BP6uL/b+P4eJ4zwHrdcX+38fw6aC3prTT5TXKaPKvp7vHs69BmPjktbGQYqtCQXO9Z9qaqtwp1db5bXNUH83/N9F+x6Xh/0/e/u5Ptz+70PD/p+93vf25/dxOVkztm7LJOc5ecn6ei9Ee1jGcZ8uZ1I9/i488efLmdRgxzVaC5BRjpMRdtf2Fcm/XQa5mUiaeqTqptph7rtknKe+VDWml82T1wZ3ub18IcnBnfJnevgBHIsUHWpy8NrTrb3D7J8ItcZuvN16nuM3Xm69fypCAadMogPFO0IVrVEFGGFApNC4mTrK2RjZhZkzDF8wHKQzV5SMMjOTNBqoxenpAFhJBJWUkElVYSPRMbLZ+QDs2MlXgGhhRDbRPVWzOofVR1HRJK+tK82PI0dGfYtsiUiWp3X0v2Z6U6ceuEt97XfNP8AllLntXpr/k+a8bz/AFOW2e3s+a8VyTk5bqezoMdQ7nWpRdkYqUoKS74xfk2vQ4/JrrzdeiNzZnzdel+Xs7FjZCdcv0zhKEvo1ofGrjU1PeNjdzqanvHx2+lwlKEv1QlKEv7ovTPrM6mpNT2r6vOpqTU9r6s2FSKswVrjrcl9QU3w6Fy1FIRzSeoS1hhw0lvy5839ktsYtqiiEGsYgZEogUiqgEta1xBWGVIAUQvIyYXImZXEKcifI0X6DOQxU9wDRRsIVKM0izRmrKSCRhMMJpQJFoI1NGswDWQyd91kKpDbAr2yWqrfSHWuBEQGVWGK5rb2a6X4+TBNbhX/AKtnHGotaX3ev3IeL5vp8Vs976Ry+O5vp8Ns976R0vXfaNV7pxmpW+U7uHGv1UfWX7L5nneF8B5vv5fb8fl5/g/0/wA3W+WdZ/H5/wCHOY05xl4qnNW77vE7n393q38T1bnNz5evT8PX3nOs+Sz7fw6vo/tTC1qrI7a7fKNnlXY/R/0y/b/B5HifA3P38frPx8x43iv068f38Xrn8fM/mOY9t8Lw8nxEvduip/8AvHUZf7X9z0P07k83D5f8rs/TeXz8Xl+cucZ3PSipgFYS95C019jWyYqWcqUxjKSjKaqT475Rcop/PXkgatk7k7LyW5ncnbp+iezrrm7LJVWQlVKMPDbkn3rTfK9N/k8/n8ZNZ8uZZe/n+zx/E+Nm8+XMsvfr3/Yl6j0b+HXv3Vub/TXBSc2vV+iOzi8R9W/bm9fl28PiPq37c3r8gYxLup5xAZVQCDWEAAIrRi1pPyMWFuZYaOnEKbZjw9Y9wxE9wDdvJmBpABmjQS1nYgsFmGJaUCRpUgHi1gWrMKcaJCdrSH/T6+CNNsyS4Ah2FugZSVWq+yEJwhLsjZrxHHiUkt6i36csXWM6s1Z3Z7E1x51qa1O7PZnVWPVOxXbwAvfqWZQ2Vp7IyepWWVRpsfeq5d1U5czgtacd/FeX4Fzw5zu7z6W+7nzwZzyXefS33/kvZV0IMEFYj0xapfYa5ik6UkxoWujweuwxaKqq4+NP9dzb1CPc99ifrrS9Dh5PDXl5LrV6nw8vk8Hrm5Nb1ep8fyB6xfXbc7a9pWRhKUZLTjNLTX7J/cvwZ1jHl18Onw/Hrj45jXwGjEquntMyVAJV4xMzWETEtVyZaRhwSZdgY68zqF1kh4XVZ7CVOzD2tEFGCK0A1a6MVjcFgcxolpUJG1KAd6YQ0qkalzGyiI6JHSYkOCJN0ZrgyDGyJjysXAw9rQgZu2lnkZp7lOUNF/gFMcrNmMhGCHHQelSyXKNc642xXcq7G498fi00n5f/AE5vEc84ZLqXq/MJ4jxGeCS7l8t+Z8HvUehPHwu+aTvlfBza95V16lqKf4b+xzcXivq8/Wf6ZP8AdxcXjPreI8uf6JL1/f2c6z0He0hEHYNoIBa2SMC6RirJBBZIwNa4hhLQOfPQF+KEWRMeOi+wSTGiVqoQSAY1rQFJBdUQBWmjAEvDBoOQ8Q0hGLBFK4AdSQS1MECmxBMYirumojwRc2q1cjF6VZmV7DD2mMTN2rd5GHPuT5PmNHQCmOVmzDXkYcug9lraKrf4i+bj4W/CrgnKyyxpryXlFJ/H1OPxeeTePp4nv734iHjc8nJx/S45/V734n/Ls8v2ii8T+JpipPvVcoWecJP4SSf0/J5vH4Ozm+nu/wB/R4vH4Gzn+lyXr077ny4jLyXdPvcKoP4qmtVxfz+Z7GMTE6lt/wBXucfHOOdS2/63tEUMetYgLVu4IdJUzFsXjIIdNImJRUI6i2NErfXoh6jbywR3cU9Ce2Q8NqsGMk8ZlooFPmCaYCqUZGIE1pLgzQvyBobQOQ7m0mJmgtR1EBmDCVpWhatiDYw4FU7PnLSJOfrtk7jG8qY2GDpvCRiWNEjFY5HkY+PcmyXyNHQCkUKoBqmKAfAqlC1Sjq5yUZQTfbPtco/BteT/AHf5BZO5fmIazLqavvEwgZu2mgApOzQRmWLvD0bypjcYtyJqmZOwZQtsyWr0KzX2w+w99keL7tOUzLNtgj0p6Qvmx4nqqBIlANGtURarIYUVgLqiIwMVW9aRhyVZDHg6CsZzVeqO2jGgzI4SRggZGaN6YiV0ZMYV8CltF32k2kDeKN0zWqYKA+kCem6MRhkvgx8EmQ+R46PgKxyqMzNIIVXMH41YlDdFxrMjau0BmFtmgnzAFtw0isnTHxAhavCwwGGK9ip7h306vfI2Y4ebQXrl/wADa91fC4+XL3yDHZqhZMdC14zLwQtUzBuNWKpb0YQgZG1rCIC2hsthimCjIY8bYcZzisGG2YbeovmPkwT2YxQKfEG4sBKtfY1jDgCFoO2Ysi9ZpjEE44lMZUoCOm4SBsvyApx+5Je+R4vQ7HKhIDRvTHkWre0NsesRDdEdpk+w19mgqYnZXfcNI6JOgk5jF1pXuMTtrUwU0NsGO9Cp8l6jo69Qr38dFJ6R5uvv25jql/c2JHpcWeoTWyHjbrEdDtMQGyJphsSujPobY9WgJ6omMQE7Xa0jFLsp+YV8lNzHhN1iOiZ9PhpN/IAbvwFvluTMMerQKtiGWHEQ2/YwAgVyZotqvRNQg7FiJTaMqkBDTRmKFz/IKnH7kVrHi9ZDFWigGzBuJWJTavUNqYcAcuqpfYkjDnPZPlX7DI68zoBZMeQNaZbGRteTM0E0oWq5dD0inyYs93L4jQrqmTpaQdVLgx8uYyrNs0d/tAE2Ujm3VAka1oWrYhnhU7Eqmr1DKMdAQqe9GbpE7OAjIX5T4DFIUWvkeJbqILbGJDfXbV9QJ310WPzMrG9MRa6MmmLEQm6KMmT7GPWtaFp8wyxYky7o+JkatFBLQfVOEZXhIpjr1UJWlcQVSGuJWIlujLJaRkZO6UZmQGR14z0WWzGhtaYtjoWoMWpiajkdiV7aQlW9o6jHShD5mno8/f3aJuoX72COvjz0T3SHht0Mx45qmKNTZh102GouXyFbkvwWZc9yfJ2Ni7bD2F0TmrKygNP/2Q==',
    price: 60.00,
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
    price: 0,
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
    price: 0,
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
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxUPEBIQEBAPDw8PDw8PEBAPDw8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFy0dHR8uLSsrLS0tLSsrLy0rKy0rLS0tKy0tLS0rKy0tLS0tKy0rLS0rLS0tLS0tLS0tKystLf/AABEIAKIBNwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABGEAABAwEEBwMHCQUIAwAAAAABAAIRAxQSITEFBkFRYXGRE1KBIjJCkqHB0QcUFVNicoKx8BYjQ6LhJDNjk6PC0uKDsvH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EACERAQEBAQADAQABBQAAAAAAAAABEQIDEiExQQQTQlFx/9oADAMBAAIRAxEAPwDaQnwiF5NGIToRCBqE6EQgZCIT4RCoZCIT7qeyiTsQQwiFa+bxmmOaghupQ1PupYQPohXaYVSkFdpBWCxsQAnEYJFQJQEAJUBCQhKgoIyhOISQgRIlhV7fbGUKT61Qwym0vdvgbBxOSgsOcAJJAAzJMABVaWlaLsG1Gv4slzPWGHtXi+tOtte1PxN2nMsotm60ThPePE+xaOr2mQKYDpdeIDgDs57ycPwrPVsmx6ccy3K9Sbp2zEwK9IxmQ8XR45KeyWynVF6k9tRskXmEObI2SFwlfR9OtZKrW3Wyx1YmIDREgwmkBIKYkV00pW2vqLpTDpG+yn7COb+rbmcizbY8jp16MHIYnY/pfT3fDIkt7pp74pfGe96/EZfkhzc049Yn+a/wD7+/Tm5uf6esT/ADX/AN/8wFFlnXEtGCrQQKfLUBxfSY1eLGV0/Dpg1ZN775aW2oRS523+OSXNd+SzE71fT/mufnu/JZxzvV9P+a7qXtGr8ec6HOm6N0K5Rf73+HLepL03r9meVx+BvHzScnrLHkZ8D9LlmeSeaWW/2Kcy1vzbk/i222z2Pb0ju48yexZfMy8hXkSHhwc0MWs+0wvdpmb0IWqYOsPyJl2PiFCoZgY2Mx4BukZKxjsYqlr4MpkJIaBpUIQPaaNpgx4hUAZKMMSxArEMJNIEMUKei8CG5ITSntk06tZqCj8hU+HPr25u1lIfkrJMZOO89jcbsx+5rm2cpcf0L3Uv2b+54X6jyeXl8s/+rw/1Dk83L1PiOS6jjeDfZV8ITaj/AGPmP7NHr8PJ9Tjzv8se5wcn1OPO/wAsSii0QU+WjYDoQSw46JDnYl90ue+hhlz5NUcT0ev6a5YqyYbfZOcbo+kU+Jr6J8/khOaTl+nr59v4TnPM830tfPXX8OflCUk5KMnFcuSi3FL5v4HV3J6X3dGtSelvqHaGZVxMaI0Zm9KFp8m+L5EybGoKFekYYFukZTMAWSDFGewh0ztZj5DseE0hmGBrTQNMWMhY8FnkCjGqAqqwxPSDMLFNPc06TXzsnT8l9D6rp2Jlf6buuoyNcQl4coWf28L8b/ACcPiOfm4fumZrH/AH9P9XHyc/PwTzeSax+fXuf6/wAlPUPZC+L9yyqxfPurf45/yHi/U+PU9c2fuh/ifHr+rNn7gV7M5f8ARD6+JEv/ANfwfn9hnj+D8/s7rEpUIQrj+mEIwX0S0eDya82rq+9eJvV3q6vvSrrns3ZkWq2udcN1xjNT7tuSb0+F6a/B2eF8dnhx5NS31el4TxueHHk1LfUD/wBF5H/ko/M1/tOn/FOL/Lf2/l1f4nxf5b+38h+p+z/APDQ7rsiruf/AG6oRlKc399aXzK8PjPra6xi9fNdHhfGfW11jF6+aSs63dXohCOg6PHUd2T5c/PfXoTXkwhPdlUb4/0ynOH4af8AnZPe1Or6zrqp6xrWes68t/7Os6NmUW1PwK/CgpOM6+1L3ml6efGjx/EcfJjf33uvE8Vx8mN/+Jru/lzvtxO1KuKWsZ8tx+NnwT+WuV9zt/T5jvVv8AW6v06Y71b/X/APjkVE9R60ecQHivaYK2qiLTQ0xhCaGRClVZszQDkTMtmAZyGh6qmEIzsZj/AAxYydekA0DWDQmmQU+kMIJiCjlr8AKKMMT08jNBcUJVMQ96dDUdk6G/cB1CXvb+Ke0/imaLZn2mnSfad8V5L38I3/H6T/5/JweI8BP6uL/b+P4eJ4zwHrdcX+38fw6aC3prTT5TXKaPKvp7vHs69BmPjktbGQYqtCQXO9Z9qaqtwp1db5bXNUH83/N9F+x6Xh/0/e/u5Ptz+70PD/p+93vf25/dxOVkztm7LJOc5ecn6ei9Ee1jGcZ8uZ1I9/i488efLmdRgxzVaC5BRjpMRdtf2Fcm/XQa5mUiaeqTqptph7rtknKe+VDWml82T1wZ3ub18IcnBnfJnevgBHIsUHWpy8NrTrb3D7J8ItcZuvN16nuM3Xm69fypCAadMogPFO0IVrVEFGGFApNC4mTrK2RjZhZkzDF8wHKQzV5SMMjOTNBqoxenpAFhJBJWUkElVYSPRMbLZ+QDs2MlXgGhhRDbRPVWzOofVR1HRJK+tK82PI0dGfYtsiUiWp3X0v2Z6U6ceuEt97XfNP8AllLntXpr/k+a8bz/AFOW2e3s+a8VyTk5bqezoMdQ7nWpRdkYqUoKS74xfk2vQ4/JrrzdeiNzZnzdel+Xs7FjZCdcv0zhKEvo1ofGrjU1PeNjdzqanvHx2+lwlKEv1QlKEv7ovTPrM6mpNT2r6vOpqTU9r6s2FSKswVrjrcl9QU3w6Fy1FIRzSeoS1hhw0lvy5839ktsYtqiiEGsYgZEogUiqgEta1xBWGVIAUQvIyYXImZXEKcifI0X6DOQxU9wDRRsIVKM0izRmrKSCRhMMJpQJFoI1NGswDWQyd91kKpDbAr2yWqrfSHWuBEQGVWGK5rb2a6X4+TBNbhX/AKtnHGotaX3ev3IeL5vp8Vs976Ry+O5vp8Ns976R0vXfaNV7pxmpW+U7uHGv1UfWX7L5nneF8B5vv5fb8fl5/g/0/wA3W+WdZ/H5/wCHOY05xl4qnNW77vE7n393q38T1bnNz5evT8PX3nOs+Sz7fw6vo/tTC1qrI7a7fKNnlXY/R/0y/b/B5HifA3P38frPx8x43iv068f38Xrn8fM/mOY9t8Lw8nxEvduip/8AvHUZf7X9z0P07k83D5f8rs/TeXz8Xl+cucZ3PSipgFYS95C019jWyYqWcqUxjKSjKaqT475Rcop/PXkgatk7k7LyW5ncnbp+iezrrm7LJVWQlVKMPDbkn3rTfK9N/k8/n8ZNZ8uZZe/n+zx/E+Nm8+XMsvfr3/Yl6j0b+HXv3Vub/TXBSc2vV+iOzi8R9W/bm9fl28PiPq37c3r8gYxLup5xAZVQCDWEAAIrRi1pPyMWFuZYaOnEKbZjw9Y9wxE9wDdvJmBpABmjQS1nYgsFmGJaUCRpUgHi1gWrMKcaJCdrSH/T6+CNNsyS4Ah2FugZSVWq+yEJwhLsjZrxHHiUkt6i36csXWM6s1Z3Z7E1x51qa1O7PZnVWPVOxXbwAvfqWZQ2Vp7IyepWWVRpsfeq5d1U5czgtacd/FeX4Fzw5zu7z6W+7nzwZzyXefS33/kvZV0IMEFYj0xapfYa5ik6UkxoWujweuwxaKqq4+NP9dzb1CPc99ifrrS9Dh5PDXl5LrV6nw8vk8Hrm5Nb1ep8fyB6xfXbc7a9pWRhKUZLTjNLTX7J/cvwZ1jHl18Onw/Hrj45jXwGjEquntMyVAJV4xMzWETEtVyZaRhwSZdgY68zqF1kh4XVZ7CVOzD2tEFGCK0A1a6MVjcFgcxolpUJG1KAd6YQ0qkalzGyiI6JHSYkOCJN0ZrgyDGyJjysXAw9rQgZu2lnkZp7lOUNF/gFMcrNmMhGCHHQelSyXKNc642xXcq7G498fi00n5f/AE5vEc84ZLqXq/MJ4jxGeCS7l8t+Z8HvUehPHwu+aTvlfBza95V16lqKf4b+xzcXivq8/Wf6ZP8AdxcXjPreI8uf6JL1/f2c6z0He0hEHYNoIBa2SMC6RirJBBZIwNa4hhLQOfPQF+KEWRMeOi+wSTGiVqoQSAY1rQFJBdUQBWmjAEvDBoOQ8Q0hGLBFK4AdSQS1MECmxBMYirumojwRc2q1cjF6VZmV7DD2mMTN2rd5GHPuT5PmNHQCmOVmzDXkYcug9lraKrf4i+bj4W/CrgnKyyxpryXlFJ/H1OPxeeTePp4nv734iHjc8nJx/S45/V734n/Ls8v2ii8T+JpipPvVcoWecJP4SSf0/J5vH4Ozm+nu/wB/R4vH4Gzn+lyXr077ny4jLyXdPvcKoP4qmtVxfz+Z7GMTE6lt/wBXucfHOOdS2/63tEUMetYgLVu4IdJUzFsXjIIdNImJRUI6i2NErfXoh6jbywR3cU9Ce2Q8NqsGMk8ZlooFPmCaYCqUZGIE1pLgzQvyBobQOQ7m0mJmgtR1EBmDCVpWhatiDYw4FU7PnLSJOfrtk7jG8qY2GDpvCRiWNEjFY5HkY+PcmyXyNHQCkUKoBqmKAfAqlC1Sjq5yUZQTfbPtco/BteT/AHf5BZO5fmIazLqavvEwgZu2mgApOzQRmWLvD0bypjcYtyJqmZOwZQtsyWr0KzX2w+w99keL7tOUzLNtgj0p6Qvmx4nqqBIlANGtURarIYUVgLqiIwMVW9aRhyVZDHg6CsZzVeqO2jGgzI4SRggZGaN6YiV0ZMYV8CltF32k2kDeKN0zWqYKA+kCem6MRhkvgx8EmQ+R46PgKxyqMzNIIVXMH41YlDdFxrMjau0BmFtmgnzAFtw0isnTHxAhavCwwGGK9ip7h306vfI2Y4ebQXrl/wADa91fC4+XL3yDHZqhZMdC14zLwQtUzBuNWKpb0YQgZG1rCIC2hsthimCjIY8bYcZzisGG2YbeovmPkwT2YxQKfEG4sBKtfY1jDgCFoO2Ysi9ZpjEE44lMZUoCOm4SBsvyApx+5Je+R4vQ7HKhIDRvTHkWre0NsesRDdEdpk+w19mgqYnZXfcNI6JOgk5jF1pXuMTtrUwU0NsGO9Cp8l6jo69Qr38dFJ6R5uvv25jql/c2JHpcWeoTWyHjbrEdDtMQGyJphsSujPobY9WgJ6omMQE7Xa0jFLsp+YV8lNzHhN1iOiZ9PhpN/IAbvwFvluTMMerQKtiGWHEQ2/YwAgVyZotqvRNQg7FiJTaMqkBDTRmKFz/IKnH7kVrHi9ZDFWigGzBuJWJTavUNqYcAcuqpfYkjDnPZPlX7DI68zoBZMeQNaZbGRteTM0E0oWq5dD0inyYs93L4jQrqmTpaQdVLgx8uYyrNs0d/tAE2Ujm3VAka1oWrYhnhU7Eqmr1DKMdAQqe9GbpE7OAjIX5T4DFIUWvkeJbqILbGJDfXbV9QJ310WPzMrG9MRa6MmmLEQm6KMmT7GPWtaFp8wyxYky7o+JkatFBLQfVOEZXhIpjr1UJWlcQVSGuJWIlujLJaRkZO6UZmQGR14z0WWzGhtaYtjoWoMWpiajkdiV7aQlW9o6jHShD5mno8/f3aJuoX72COvjz0T3SHht0Mx45qmKNTZh102GouXyFbkvwWZc9yfJ2Ni7bD2F0TmrKygNP/2Q==',
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    name: 'Gratuito',
    price: 'R$ 0/mês',
    features: [
      'Acesso a cursos gratuitos',
      'Certificados básicos',
      'Suporte comunitário',
      'Acesso ao app mobile'
    ]
  },
  {
    name: 'Pro Mensal',
    price: 'R$ 89,90/mês',
    features: [
      'Acesso a todos os cursos',
      'Certificados verificados',
      'Projetos práticos',
      'Mentoria mensal em grupo',
      'Acesso offline'
    ]
  },
  {
    name: 'Pro Anual',
    price: 'R$ 59,90/mês',
    features: [
      'Tudo do Pro Mensal',
      '2 meses grátis',
      'Mentoria individual',
      'Acesso antecipado',
      'Grupo VIP de alunos'
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
    question: 'Posso assistir as aulas pelo celular?',
    answer: 'Com certeza. Nossa plataforma é 100% responsiva e também possuímos um aplicativo para Android e iOS onde você pode baixar as aulas para assistir offline.'
  },
  {
    question: 'Preciso de conhecimento prévio?',
    answer: 'A maioria dos nossos cursos possui nível iniciante (do zero). Cursos intermediários e avançados especificam os pré-requisitos na descrição.'
  },
  {
    question: 'Como emito meu certificado?',
    answer: 'Ao concluir 100% das aulas e projetos de um curso, a opção de emitir certificado ficará disponível automaticamente no seu painel.'
  }
];