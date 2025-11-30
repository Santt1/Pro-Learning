import { LucideIcon } from 'lucide-react';

export interface Instructor {
  name: string;
  avatar: string;
  role: string;
}

export enum CourseLevel {
  Iniciante = 'Iniciante',
  Intermediario = 'Intermediário',
  Avancado = 'Avançado'
}

export interface Course {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  students: number;
  level: CourseLevel | string;
  instructor: Instructor;
  duration: string;
  fullDescription: string;
  modules: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
}

export interface Plan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}