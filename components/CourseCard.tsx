import React, { useState } from 'react';
import { Clock, BarChart, Star, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isFree = course.price === 0;

  // Fallback gradients based on category
  const fallbackGradient = "bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800";

  return (
    <Link 
      to={`/course/${course.id}`}
      className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all duration-500 flex flex-col h-full relative hover:-translate-y-1.5"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
        
        {/* Loading Spinner */}
        {isLoading && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 z-10">
            <Loader2 className="animate-spin text-slate-400" size={24} />
          </div>
        )}

        {!imgError ? (
          <>
            <img 
              src={course.image} 
              alt={course.title} 
              className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setImgError(true);
                setIsLoading(false);
              }}
              loading="lazy"
            />
            {/* Overlay Gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </>
        ) : (
          <div className={`w-full h-full ${fallbackGradient} flex flex-col items-center justify-center text-slate-400 dark:text-slate-500`}>
            <ImageIcon size={32} className="mb-2 opacity-50" />
            <span className="text-xs font-medium uppercase tracking-widest opacity-70">{course.category}</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-20">
          {isFree && (
            <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md uppercase tracking-wider backdrop-blur-md">
              Grátis
            </span>
          )}
          {course.rating >= 4.8 && (
            <span className="bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-md flex items-center gap-1 uppercase tracking-wider">
              <Star size={10} fill="currentColor" /> Top
            </span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        {/* Meta Info */}
        <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wide">
          <span className="truncate max-w-[120px]">{course.category}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
          <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
             <BarChart size={10} /> {course.level}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
          {course.title}
        </h3>
        
        {/* Instructor */}
        <div className="flex items-center gap-2 mb-4 mt-auto">
           <img 
             src={course.instructor.avatar} 
             alt="" 
             className="w-6 h-6 rounded-full object-cover border border-slate-200 dark:border-slate-700"
             onError={(e) => {
               (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${course.instructor.name}&background=random`;
             }}
           />
           <span className="text-xs text-slate-500 dark:text-slate-400 truncate w-full">{course.instructor.name}</span>
        </div>

        {/* Footer Info */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
             <span className="font-bold text-sm">{course.rating}</span>
             <Star size={12} fill="currentColor" />
             <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">({course.students})</span>
          </div>
          
          <div className="text-right">
             {isFree ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">Gratuito</span>
             ) : (
                <span className="text-slate-900 dark:text-white font-extrabold text-base">R$ {course.price.toFixed(2)}</span>
             )}
          </div>
        </div>
      </div>
    </Link>
  );
};