import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { COURSES } from '../constants';
import { Course } from '../types';

interface User {
  name: string;
  email: string;
  myCourses: string[]; // Array of Course IDs
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  register: (name: string, email: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Simula persistência básica
  useEffect(() => {
    const storedUser = localStorage.getItem('pro_learning_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string) => {
    // Simula um usuário que já comprou o curso de IA (ai-1) e Inglês (lang-1)
    const mockUser: User = {
      name: 'Alex Estudante',
      email: email,
      myCourses: ['ai-1', 'lang-1'] 
    };
    setUser(mockUser);
    localStorage.setItem('pro_learning_user', JSON.stringify(mockUser));
  };

  const register = (name: string, email: string) => {
    // Ao registrar, já damos os cursos de "boas vindas" para o exemplo
    const mockUser: User = {
      name: name,
      email: email,
      myCourses: ['ai-1', 'lang-1']
    };
    setUser(mockUser);
    localStorage.setItem('pro_learning_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pro_learning_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
