import React from 'react';
import { Check, Star } from 'lucide-react';
import { PLANS } from '../constants';

export const Plans: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold text-sm mb-6">
            Investimento no seu Futuro
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Escolha o plano ideal para a sua jornada
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Acesso ilimitado a todos os cursos, certificados verificados e mentoria com experts. 
            Cancele a qualquer momento, sem taxas ocultas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center animate-slide-up">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-[2rem] p-8 border transition-all duration-300 flex flex-col h-full
                ${plan.recommended 
                  ? 'bg-white dark:bg-slate-800 border-indigo-500 ring-4 ring-indigo-500/20 shadow-2xl scale-105 z-10' 
                  : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl'
                }
              `}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <Star size={12} fill="currentColor" /> Recomendado
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    {plan.price.split('/')[0]}
                  </span>
                  <span className="text-lg font-medium text-slate-500 dark:text-slate-400">
                    /{plan.price.split('/')[1]}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  {plan.name === 'Pro Anual' ? 'Cobrado anualmente' : 'Cobrado mensalmente'}
                </p>
              </div>
              
              <div className="h-px bg-slate-200 dark:bg-slate-700 w-full mb-8"></div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className={`mt-0.5 p-1 rounded-full ${plan.recommended ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'}`}>
                       <Check size={12} strokeWidth={3} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                ${plan.recommended 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/30' 
                  : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 hover:border-indigo-500 hover:text-indigo-600'
                }`}>
                Começar Agora
              </button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
           <div>
              <h4 className="font-bold text-3xl text-slate-900 dark:text-white mb-1">7 Dias</h4>
              <p className="text-sm text-slate-500">Garantia Incondicional</p>
           </div>
           <div>
              <h4 className="font-bold text-3xl text-slate-900 dark:text-white mb-1">SSL</h4>
              <p className="text-sm text-slate-500">Pagamento Seguro</p>
           </div>
           <div>
              <h4 className="font-bold text-3xl text-slate-900 dark:text-white mb-1">24/7</h4>
              <p className="text-sm text-slate-500">Suporte Dedicado</p>
           </div>
           <div>
              <h4 className="font-bold text-3xl text-slate-900 dark:text-white mb-1">Cancel</h4>
              <p className="text-sm text-slate-500">Cancele quando quiser</p>
           </div>
        </div>
      </div>
    </div>
  );
};