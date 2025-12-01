import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, BarChart, Star, Check, PlayCircle, Lock, Users, ShieldCheck, ArrowLeft } from 'lucide-react';
import { COURSES, CATEGORIES } from '../constants';

export const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find(c => c.id === id);

  // Encontrar o nome da categoria para o breadcrumb/botão voltar
  const categoryName = CATEGORIES.find(cat => cat.slug === course?.category)?.name || 'Cursos';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Curso não encontrado</h2>
        <Link to="/categories" className="text-indigo-600 dark:text-indigo-400 mt-4 hover:underline">Voltar para cursos</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 transition-colors duration-300">
      {/* Course Header */}
      <div className="bg-slate-900 dark:bg-black text-white pt-10 pb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
          
          {/* BOTÃO DE VOLTAR ADICIONADO AQUI */}
          <Link 
            to={`/category/${course.category}`}
            className="inline-flex items-center gap-2 text-indigo-300 hover:text-white mb-8 transition-colors text-sm font-medium group"
          >
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
              <ArrowLeft size={20} />
            </div>
            <span>Voltar para {categoryName}</span>
          </Link>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-indigo-300">
                <Link to="/categories" className="hover:text-white transition-colors">Cursos</Link>
                <span>/</span>
                <span className="uppercase tracking-wider">{course.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">{course.title}</h1>
              <p className="text-lg text-slate-300 leading-relaxed">{course.fullDescription}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill={i <= Math.round(course.rating) ? "currentColor" : "none"} />)}
                  </div>
                  <span>({course.rating} de 5.0)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} />
                  <span>{course.students} alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>Última atualização: Set/2025</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                 <img src={course.instructor.avatar} alt={course.instructor.name} className="w-12 h-12 rounded-full border-2 border-indigo-500 object-cover" />
                 <div>
                    <p className="text-white font-bold">Por {course.instructor.name}</p>
                    <p className="text-indigo-300 text-sm">{course.instructor.role}</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 animate-slide-up">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Content */}
          <div className="md:w-2/3 space-y-8">
            {/* What you will learn */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">O que você vai aprender</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Dominar conceitos fundamentais e avançados',
                  'Desenvolver projetos práticos para portfólio',
                  'Entender as melhores práticas do mercado',
                  'Utilizar ferramentas profissionais atuais'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Conteúdo do Curso</h2>
              <div className="space-y-4">
                {course.modules.map((mod, index) => (
                  <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 flex items-center justify-between cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group">
                      <div className="flex items-center gap-3">
                        <PlayCircle className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700" size={20} />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Módulo {index + 1}: {mod}</span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">3 aulas</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Card */}
          <div className="md:w-1/3 relative">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="h-48 overflow-hidden relative group">
                   <img src={course.image} alt="Capa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <PlayCircle size={64} className="text-white opacity-80" />
                   </div>
                </div>
                <div className="p-6">
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">R$ {course.price.toFixed(2).replace('.', ',')}</span>
                    <span className="text-slate-400 line-through mb-1 text-sm">R$ {(course.price * 1.5).toFixed(2).replace('.', ',')}</span>
                  </div>

                  <Link to="/register" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 mb-4 transform hover:-translate-y-1">
                    Matricular-se Agora
                  </Link>

                  <p className="text-center text-xs text-slate-500 dark:text-slate-400 mb-6">Garantia de 7 dias ou seu dinheiro de volta</p>

                  <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                      <Clock size={18} className="text-slate-400" />
                      <span>{course.duration} de conteúdo</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                      <BarChart size={18} className="text-slate-400" />
                      <span>Nível {course.level}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                      <Lock size={18} className="text-slate-400" />
                      <span>Acesso vitalício</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                      <ShieldCheck size={18} className="text-slate-400" />
                      <span>Certificado de conclusão</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};