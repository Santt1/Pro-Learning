import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hexagon, User, Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

export const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-slate-50 dark:bg-slate-950 overflow-hidden py-10">
      <ParticleBackground />
      
      <div className="relative z-10 w-full max-w-md p-4 animate-slide-up">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700 shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                <Hexagon className="h-10 w-10 text-indigo-600 dark:text-indigo-500 fill-indigo-100 dark:fill-indigo-900/30" strokeWidth={1.5} />
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Pro-Learning</span>
              </Link>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Crie sua conta</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Comece sua jornada de aprendizado hoje.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="email" 
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    className="w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="Mínimo 8 caracteres"
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" required className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300" />
                <label htmlFor="terms" className="text-sm text-slate-500 dark:text-slate-400">
                  Concordo com os <a href="#" className="text-indigo-600 hover:underline">Termos de Uso</a> e <a href="#" className="text-indigo-600 hover:underline">Política de Privacidade</a>
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Cadastrar <ArrowRight size={20} />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 text-center">
              <p className="text-slate-500 dark:text-slate-400">
                Já tem uma conta?{' '}
                <Link to="/login" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                  Fazer Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};