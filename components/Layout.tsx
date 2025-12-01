import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Sun, Moon, Phone, Mail, MapPin, GraduationCap, Hexagon, UserCircle, LogOut } from 'lucide-react';
import { AiAssistant } from './AiAssistant';
import { useAuth } from '../context/AuthContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  // Dark Mode Logic - Default to LIGHT MODE
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const isActive = (path: string) => 
    location.pathname === path 
      ? 'text-indigo-600 dark:text-indigo-400 font-bold' 
      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors';

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* NEW LOGO DESIGN */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center">
                 <Hexagon className="h-10 w-10 text-indigo-600 dark:text-indigo-500 fill-indigo-100 dark:fill-indigo-900/30" strokeWidth={1.5} />
                 <GraduationCap className="h-5 w-5 text-indigo-700 dark:text-indigo-300 absolute" strokeWidth={2} />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Pro-Learning
                </span>
                <span className="text-[0.65rem] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Education Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10 items-center">
              <Link to="/" className={isActive('/')}>Início</Link>
              <Link to="/categories" className={isActive('/categories')}>Cursos</Link>
              <Link to="/plans" className={isActive('/plans')}>Planos</Link>
              <Link to="/info" className={isActive('/info')}>Sobre & Dados</Link>
            </nav>

            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Alternar Tema"
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
              </button>
              
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>

              {isAuthenticated && user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <UserCircle size={24} />
                    <span className="font-semibold">{user.name.split(' ')[0]}</span>
                  </div>
                  <button 
                    onClick={logout}
                    className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-full transition-colors"
                    title="Sair"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold">Login</Link>
                  <Link to="/register" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5">
                    Criar Conta
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
              </button>
              <button 
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full shadow-2xl animate-fade-in z-50">
            <div className="px-6 pt-4 pb-8 space-y-3">
              <Link to="/" className="block py-3 px-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
              <Link to="/categories" className="block py-3 px-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Cursos</Link>
              <Link to="/plans" className="block py-3 px-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Planos</Link>
              <Link to="/info" className="block py-3 px-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sobre & Dados</Link>
              
              <div className="border-t border-slate-100 dark:border-slate-800 my-4 pt-4 space-y-3">
                {isAuthenticated && user ? (
                  <>
                    <div className="px-4 py-2 flex items-center gap-3 text-slate-800 dark:text-white font-bold">
                       <UserCircle size={24} /> Olá, {user.name}
                    </div>
                    <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 text-red-500 font-semibold hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2">
                       <LogOut size={18} /> Sair da conta
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="block w-full text-center py-3 text-slate-600 dark:text-slate-300 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                    <Link to="/register" className="block w-full text-center bg-indigo-600 text-white py-3.5 rounded-xl font-bold shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                      Criar Conta
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        {children}
      </main>

      {/* AI Assistant Widget */}
      <AiAssistant />

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-300 pt-20 pb-10 border-t border-slate-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Hexagon className="h-8 w-8 text-indigo-500" />
                <span className="text-2xl font-bold text-white">Pro-Learning</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Transformando vidas através da educação tecnológica de ponta. Junte-se à nossa comunidade global de aprendizado.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-indigo-600 text-white transition-all hover:-translate-y-1"><Facebook size={18} /></a>
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-sky-500 text-white transition-all hover:-translate-y-1"><Twitter size={18} /></a>
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-pink-600 text-white transition-all hover:-translate-y-1"><Instagram size={18} /></a>
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-700 text-white transition-all hover:-translate-y-1"><Linkedin size={18} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Explorar</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/" className="text-slate-400 hover:text-indigo-400 hover:pl-2 transition-all block">Página Inicial</Link></li>
                <li><Link to="/categories" className="text-slate-400 hover:text-indigo-400 hover:pl-2 transition-all block">Todos os Cursos</Link></li>
                <li><Link to="/plans" className="text-slate-400 hover:text-indigo-400 hover:pl-2 transition-all block">Planos e Preços</Link></li>
                <li><Link to="/info" className="text-slate-400 hover:text-indigo-400 hover:pl-2 transition-all block">Dados de IA</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 hover:pl-2 transition-all block">Termos de Uso</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 hover:pl-2 transition-all block">Política de Privacidade</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 hover:pl-2 transition-all block">Política de Cookies</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 hover:pl-2 transition-all block">Acessibilidade</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="text-indigo-500 flex-shrink-0 mt-0.5" size={18} />
                  <a href="mailto:prolearning@gmail.com" className="text-slate-400 hover:text-white transition-colors">prolearning@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-indigo-500 flex-shrink-0 mt-0.5" size={18} />
                  <a href="tel:+5562992820731" className="text-slate-400 hover:text-white transition-colors">(62) 99282-0731</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-indigo-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-400">Goiânia, Goiás - Brasil</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Pro-Learning Plataforma de Ensino Ltda.</p>
            <p>Desenvolvido com tecnologia de ponta.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
