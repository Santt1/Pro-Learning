import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ArrowLeft, TrendingUp, Filter, X } from 'lucide-react';
import { COURSES, CATEGORIES } from '../constants';
import { CourseCard } from '../components/CourseCard';
import { CourseLevel } from '../types';

type SortOption = 'relevance' | 'rating';

export const CategoryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentCategory = CATEGORIES.find(c => c.slug === slug);
  
  // States for Filtering and Sorting
  const [filterLevel, setFilterLevel] = useState<string>('todos');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredCourses = useMemo(() => {
    if (!currentCategory) return [];
    
    let result = COURSES.filter(course => {
      const matchCat = course.category === currentCategory.slug;
      const matchLevel = filterLevel === 'todos' || course.level === filterLevel;
      return matchCat && matchLevel;
    });

    // Sorting Logic
    result = result.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating; // Highest rating first
      return 0; // Default relevance (id order or random as generated)
    });

    return result;
  }, [filterLevel, sortBy, currentCategory]);

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Categoria não encontrada</h2>
        <Link to="/categories" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mt-4 hover:underline">
          <ArrowLeft size={16} /> Voltar para categorias
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Category Header */}
      <div className="bg-slate-900 dark:bg-black text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10 dark:bg-indigo-900/20 pattern-grid-lg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
          <Link to="/categories" className="inline-flex items-center gap-2 text-indigo-300 hover:text-white mb-6 transition-colors text-sm font-medium">
            <ArrowLeft size={16} /> Voltar para Categorias
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl">
              <currentCategory.icon size={56} className="text-indigo-400" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{currentCategory.name}</h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                {currentCategory.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden flex items-center justify-center gap-2 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200"
          >
            <Filter size={18} /> Filtrar e Ordenar
          </button>

          {/* Sidebar Filters */}
          <aside className={`fixed inset-0 z-50 lg:relative lg:z-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none lg:w-64 flex-shrink-0 transition-transform duration-300 ${showMobileFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
             <div className="p-6 lg:p-0 h-full overflow-y-auto lg:overflow-visible">
                <div className="flex justify-between items-center lg:hidden mb-6">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">Filtros</h3>
                   <button onClick={() => setShowMobileFilters(false)}><X size={24} className="text-slate-500" /></button>
                </div>

                <div className="space-y-8">
                   {/* Sort By */}
                   <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                         <TrendingUp size={16} className="text-indigo-500" /> Ordenar por
                      </h4>
                      <div className="space-y-2">
                         {[
                            { id: 'relevance', label: 'Mais Relevantes' },
                            { id: 'rating', label: 'Melhores Avaliados' },
                         ].map((opt) => (
                            <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                               <input 
                                  type="radio" 
                                  name="sortBy" 
                                  checked={sortBy === opt.id}
                                  onChange={() => setSortBy(opt.id as SortOption)}
                                  className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-600"
                               />
                               <span className={`text-sm ${sortBy === opt.id ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                                  {opt.label}
                               </span>
                            </label>
                         ))}
                      </div>
                   </div>

                   {/* Level Filter */}
                   <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                         <SlidersHorizontal size={16} className="text-indigo-500" /> Nível
                      </h4>
                      <div className="space-y-2">
                         <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="radio" name="level" checked={filterLevel === 'todos'} onChange={() => setFilterLevel('todos')} className="w-4 h-4 text-indigo-600" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Todos</span>
                         </label>
                         {[CourseLevel.Iniciante, CourseLevel.Intermediario, CourseLevel.Avancado].map((lvl) => (
                            <label key={lvl} className="flex items-center gap-3 cursor-pointer group">
                               <input type="radio" name="level" checked={filterLevel === lvl} onChange={() => setFilterLevel(lvl)} className="w-4 h-4 text-indigo-600" />
                               <span className="text-sm text-slate-600 dark:text-slate-400">{lvl}</span>
                            </label>
                         ))}
                      </div>
                   </div>
                </div>

                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="lg:hidden w-full mt-8 bg-indigo-600 text-white py-3 rounded-xl font-bold"
                >
                   Ver Resultados
                </button>
             </div>
          </aside>

          {/* Results Area */}
          <div className="flex-grow animate-slide-up">
             <div className="mb-6 flex justify-between items-end border-b border-slate-200 dark:border-slate-800 pb-4">
                <p className="text-slate-600 dark:text-slate-400">
                   <span className="text-2xl font-bold text-slate-900 dark:text-white">{filteredCourses.length}</span> cursos encontrados
                </p>
                {sortBy === 'rating' && (
                   <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">Ordenado por Melhores Avaliados</span>
                )}
             </div>

             {filteredCourses.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                   {filteredCourses.map(course => (
                      <CourseCard key={course.id} course={course} />
                   ))}
                </div>
             ) : (
                <div className="text-center py-20 bg-white dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                   <div className="bg-slate-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Filter className="text-slate-400" size={32} />
                   </div>
                   <h3 className="text-xl text-slate-800 dark:text-white font-bold mb-2">Nenhum curso encontrado</h3>
                   <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-xs mx-auto">Tente ajustar seus filtros para encontrar o que procura.</p>
                   <button 
                      onClick={() => {
                         setFilterLevel('todos');
                         setSortBy('relevance');
                      }}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline font-bold"
                   >
                      Limpar todos os filtros
                   </button>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};