import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Clock, Award, Users, Globe, Briefcase, ChevronDown } from 'lucide-react';
import { COURSES, CATEGORIES } from '../constants';
import { CourseCard } from '../components/CourseCard';
import ParticleBackground from '../components/ParticleBackground';

export const Home: React.FC = () => {
  const featuredCourses = COURSES.slice(0, 3);

  const scrollToExplore = () => {
    const element = document.getElementById('explore-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-0 pb-20 overflow-x-hidden bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-slate-900 text-white overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-indigo-900/20 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center z-10 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 font-medium text-sm backdrop-blur-sm mb-8 animate-bounce-slow">
            🚀 A Revolução do Ensino Tech
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            O futuro da educação <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">começa aqui.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Domine IA, Programação e Design com a plataforma mais avançada do mercado. 
            Mais de 180 cursos com certificados válidos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            <button 
              onClick={scrollToExplore}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:scale-105"
            >
              Explorar Protótipo <ChevronDown size={20} />
            </button>
            <Link to="/register" className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all border border-white/10 flex items-center justify-center hover:border-white/30">
              Criar Conta Grátis
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar - Float */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20">
         <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-slate-100 dark:border-slate-700 grid grid-cols-2 md:grid-cols-4 gap-8 backdrop-blur-xl bg-opacity-90 dark:bg-opacity-90">
            {[
              { val: '50k+', label: 'Alunos Impactados', icon: Users, color: 'text-blue-500' },
              { val: '180+', label: 'Cursos Completos', icon: Briefcase, color: 'text-purple-500' },
              { val: '4.9', label: 'Avaliação Média', icon: Award, color: 'text-yellow-500' },
              { val: '24/7', label: 'Suporte Humano', icon: Clock, color: 'text-green-500' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                 <div className="flex justify-center mb-3">
                    <stat.icon className={`${stat.color} group-hover:scale-110 transition-transform duration-300`} size={32} />
                 </div>
                 <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.val}</div>
                 <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
         </div>
      </div>

      {/* Categories Grid */}
      <section id="explore-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore Nossas Áreas</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Trilhas de conhecimento desenhadas por especialistas para alavancar sua carreira.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.slug}`} 
              className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="bg-indigo-50 dark:bg-slate-700 p-4 rounded-xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 text-indigo-600 dark:text-indigo-400">
                <cat.icon size={28} />
              </div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Cursos em Destaque</h2>
              <p className="text-slate-600 dark:text-slate-400">As melhores escolhas da comunidade Pro-Learning.</p>
            </div>
            <Link to="/categories" className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
              Ver Catálogo Completo <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentials / Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-indigo-900 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/50 to-transparent"></div>
          
          <div className="grid md:grid-cols-2 gap-12 p-12 md:p-20 relative z-10 items-center">
             <div className="space-y-8 text-white">
                <h2 className="text-4xl font-bold leading-tight">Por que somos a escolha número 1?</h2>
                <p className="text-indigo-200 text-lg">
                   Não somos apenas uma plataforma de cursos. Somos um ecossistema completo focado na sua empregabilidade e crescimento.
                </p>
                <div className="space-y-4">
                   {[
                      'Certificação com Validação Internacional',
                      'Projetos Práticos para Portfólio Real',
                      'Acesso a Vagas Exclusivas de Parceiros',
                      'Mentoria com Experts do Google e Amazon'
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="bg-green-500 rounded-full p-1"><CheckCircle size={16} className="text-white" /></div>
                         <span className="font-medium">{item}</span>
                      </div>
                   ))}
                </div>
                <Link to="/register" className="inline-block mt-8 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors transform hover:scale-105">
                   Começar Gratuitamente
                </Link>
             </div>
             
             <div className="relative hidden md:block">
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-500 to-indigo-600 w-64 h-64 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                   <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
                      <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white text-xl">PL</div>
                      <div>
                         <div className="font-bold text-white">Pro-Learning Certificate</div>
                         <div className="text-xs text-indigo-200">Validado em 190 países</div>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                      <div className="h-2 bg-white/20 rounded w-full"></div>
                   </div>
                   <div className="mt-6 flex justify-between items-center">
                      <div className="text-xs text-indigo-200">Autenticidade Garantida</div>
                      <Shield className="text-green-400" size={24} />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 border-t border-slate-200 dark:border-slate-800">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Ainda com dúvidas?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-slate-600 dark:text-slate-400 mb-8">
               <div className="flex items-center justify-center gap-2">
                  <span className="font-bold text-slate-900 dark:text-white">Email:</span> prolearning@gmail.com
               </div>
               <div className="hidden md:block w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
               <div className="flex items-center justify-center gap-2">
                  <span className="font-bold text-slate-900 dark:text-white">WhatsApp:</span> (62) 99282-0731
               </div>
            </div>
            <Link to="/info" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
               Consulte nossa Central de Ajuda &rarr;
            </Link>
         </div>
      </section>
    </div>
  );
};