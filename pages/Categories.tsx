import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

export const Categories: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore por Categoria</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Encontre o caminho perfeito para o seu desenvolvimento profissional.
            Nossas trilhas de aprendizado são desenhadas para todos os níveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {CATEGORIES.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.slug}`}
              className="group bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl group-hover:bg-indigo-600 dark:group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <category.icon size={32} className="text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
                </div>
                {category.slug === 'ai' && (
                  <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-bold px-2 py-1 rounded-full">
                    Em Alta
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform">
                Ver cursos <ArrowRight size={18} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};