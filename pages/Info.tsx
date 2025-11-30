import React, { useState } from 'react';
import { FAQS } from '../constants';
import { HelpCircle, Building, BookOpen, Activity, TrendingUp, Users, Cpu, Award, Lightbulb, PieChart, BarChart2 } from 'lucide-react';

enum Tab {
  About = 'about',
  HowTo = 'howto',
  Faq = 'faq'
}

export const Info: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.About);

  const tabs = [
    { id: Tab.About, label: 'Sobre & Dados IA', icon: Activity },
    { id: Tab.HowTo, label: 'Como Funciona', icon: BookOpen },
    { id: Tab.Faq, label: 'Dúvidas (FAQ)', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/40 transform scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:scale-105'
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-slate-200 dark:border-slate-800 min-h-[600px] animate-fade-in transition-colors duration-500">
          
          {/* ABOUT & AI DATA TAB */}
          {activeTab === Tab.About && (
            <div className="space-y-20 animate-slide-up">
              
              {/* Mission Section */}
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  Nossa Missão
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
                  Democratizando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Educação do Futuro</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  A Pro-Learning nasceu com o objetivo de conectar pessoas ao conhecimento tecnológico de ponta. 
                  Acreditamos que a Inteligência Artificial não é apenas uma ferramenta, mas o novo motor 
                  que impulsionará a próxima geração de profissionais globais.
                </p>
              </div>

              {/* Data Visualization Section */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-6 md:p-10 border border-slate-100 dark:border-slate-700 shadow-inner">
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-3 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-500/30">
                     <TrendingUp size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Impacto da IA no Mercado</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">Análise de dados: 2023-2026</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                  
                  {/* GRAPH 1: LINE CHART (SVG) - Market Growth */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                       <TrendingUp size={18} className="text-green-500" /> Crescimento EdTech (Bi $)
                    </h4>
                    <div className="relative h-48 w-full">
                       <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                          {/* Grid lines */}
                          <line x1="0" y1="0" x2="100" y2="0" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2" className="dark:stroke-slate-700" />
                          <line x1="0" y1="25" x2="100" y2="25" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2" className="dark:stroke-slate-700" />
                          <line x1="0" y1="50" x2="100" y2="50" stroke="#e2e8f0" strokeWidth="0.5" className="dark:stroke-slate-700" />
                          
                          {/* Area Path */}
                          <path d="M0,45 Q20,40 40,25 T100,5 L100,50 L0,50 Z" fill="url(#gradient)" opacity="0.2" />
                          
                          {/* Line Path */}
                          <path d="M0,45 Q20,40 40,25 T100,5" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                          
                          {/* Dots */}
                          <circle cx="0" cy="45" r="1.5" fill="#6366f1" />
                          <circle cx="40" cy="25" r="1.5" fill="#6366f1" />
                          <circle cx="100" cy="5" r="1.5" fill="#6366f1" />
                          
                          {/* Labels */}
                          <text x="0" y="58" fontSize="4" fill="currentColor" className="text-slate-600 dark:text-slate-400 font-medium">2023</text>
                          <text x="40" y="58" fontSize="4" fill="currentColor" className="text-slate-600 dark:text-slate-400 font-medium">2024</text>
                          <text x="90" y="58" fontSize="4" fill="currentColor" className="text-slate-600 dark:text-slate-400 font-medium">2026</text>

                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#6366f1" />
                              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                       </svg>
                    </div>
                    <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-4 font-medium">Projeção de crescimento exponencial do setor.</p>
                  </div>

                  {/* GRAPH 2: BAR CHART (CSS) - Salary Comparison */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                     <h4 className="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                       <BarChart2 size={18} className="text-blue-500" /> Média Salarial (Anual)
                    </h4>
                    <div className="flex justify-around items-end h-48 pb-2 border-b border-slate-200 dark:border-slate-700">
                       <div className="flex flex-col items-center group w-1/3">
                          <span className="text-xs text-slate-600 dark:text-slate-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold">R$ 45k</span>
                          <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-t-md h-24 hover:bg-slate-400 transition-all"></div>
                          <span className="text-xs font-bold mt-2 text-slate-700 dark:text-slate-400">Tradicional</span>
                       </div>
                       <div className="flex flex-col items-center group w-1/3">
                          <span className="text-xs text-indigo-600 font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">R$ 85k</span>
                          <div className="w-full bg-indigo-500 rounded-t-md h-40 hover:bg-indigo-600 transition-all relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-y-12 translate-y-full animate-[shine_2s_infinite]"></div>
                          </div>
                          <span className="text-xs font-bold mt-2 text-indigo-700 dark:text-indigo-400">Com IA</span>
                       </div>
                    </div>
                    <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-4 font-medium">Profissionais com skills de IA ganham até 80% mais.</p>
                  </div>

                  {/* GRAPH 3: DONUT CHART (CSS/SVG) - Skills Distribution */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                     <h4 className="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                       <PieChart size={18} className="text-purple-500" /> Demandas por Skill
                    </h4>
                    <div className="flex items-center justify-center h-48 relative">
                       {/* SVG Donut */}
                       <svg viewBox="0 0 100 100" className="w-32 h-32 transform -rotate-90">
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e2e8f0" strokeWidth="20" className="dark:stroke-slate-800" />
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="150 251" /> {/* Purple segment */}
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#6366f1" strokeWidth="20" strokeDasharray="70 251" strokeDashoffset="-150" /> {/* Indigo segment */}
                          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="31 251" strokeDashoffset="-220" /> {/* Blue segment */}
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                          <span className="text-2xl font-bold text-slate-800 dark:text-white">IA</span>
                          <span className="text-xs text-slate-600 dark:text-slate-400 font-bold">Dominante</span>
                       </div>
                    </div>
                    <div className="flex justify-center gap-4 mt-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                       <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500"></div> IA/ML (60%)</div>
                       <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Cloud (28%)</div>
                       <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Outros (12%)</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {[
                   { label: 'Alunos Ativos', value: '+50k', icon: Users, color: 'text-blue-500' },
                   { label: 'Países', value: '12', icon: Building, color: 'text-green-500' },
                   { label: 'Cursos', value: '+180', icon: BookOpen, color: 'text-purple-500' },
                   { label: 'Satisfação', value: '4.9/5', icon: Award, color: 'text-yellow-500' },
                 ].map((stat, i) => (
                   <div key={i} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                      <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
                      <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-bold">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </div>
          )}

          {/* HOW TO TAB */}
          {activeTab === Tab.HowTo && (
            <div className="animate-fade-in max-w-5xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Sua Jornada de Aprendizado</h2>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Um processo simples, eficiente e focado no seu resultado.</p>
               </div>

               <div className="relative">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 -z-10"></div>
                  
                  <div className="grid md:grid-cols-4 gap-8">
                    {[
                      { step: '01', title: 'Descubra', icon: Lightbulb, desc: 'Use nossa IA para encontrar o curso perfeito para seu momento de carreira.' },
                      { step: '02', title: 'Aprenda', icon: BookOpen, desc: 'Acesse aulas em 4K, materiais complementares e laboratórios virtuais.' },
                      { step: '03', title: 'Pratique', icon: Cpu, desc: 'Desenvolva projetos reais para compor seu portfólio profissional.' },
                      { step: '04', title: 'Conquiste', icon: Award, desc: 'Receba seu certificado validado e conecte-se com empresas parceiras.' }
                    ].map((item, idx) => (
                      <div key={idx} className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 group hover:-translate-y-2">
                         <div className="w-24 h-24 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                            <item.icon size={40} className="text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" />
                         </div>
                         <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center">{item.title}</h3>
                         <p className="text-slate-600 dark:text-slate-300 text-sm text-center leading-relaxed font-medium">{item.desc}</p>
                         <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 dark:text-slate-800 -z-10 select-none group-hover:text-indigo-50 dark:group-hover:text-indigo-900/20 transition-colors">
                           {item.step}
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          )}

          {/* FAQ TAB */}
          {activeTab === Tab.Faq && (
            <div className="animate-fade-in max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:bg-white dark:hover:bg-slate-750 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all cursor-pointer group">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3 flex items-start gap-4">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-400 mt-[-2px]">
                         <HelpCircle size={20} />
                      </div>
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 pl-[3.25rem] leading-relaxed font-medium">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                 <p className="text-slate-600 dark:text-slate-400 font-medium">Não encontrou o que procurava?</p>
                 <a href="mailto:prolearning@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline mt-2 inline-block">Entre em contato: prolearning@gmail.com</a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};