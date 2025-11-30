import { GoogleGenAI } from "@google/genai";
import { COURSES } from "../constants";

// Inicializa o cliente Gemini
// Certifique-se de que a variável de ambiente API_KEY está configurada no seu projeto
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Prepara o contexto dos cursos para a IA "ler"
const getCoursesContext = () => {
  return COURSES.map(course => 
    `- Curso: "${course.title}" (Nível: ${course.level}, Preço: R$ ${course.price.toFixed(2)}). 
     Descrição: ${course.fullDescription} 
     Módulos: ${course.modules.join(', ')}`
  ).join('\n\n');
};

export const getCourseRecommendation = async (query: string): Promise<string> => {
  try {
    // Verifica se a chave API existe (segurança básica para o frontend)
    if (!process.env.API_KEY) {
      console.warn("API_KEY não encontrada. Retornando resposta de fallback.");
      return "Desculpe, minha conexão com o cérebro da IA não está configurada corretamente (API Key ausente).";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: `Você é o Assistente Virtual Inteligente da plataforma Pro-Learning.
        
        Sua missão: Ajudar estudantes a escolherem o curso ideal para suas carreiras, baseando-se EXCLUSIVAMENTE no catálogo de cursos abaixo.
        
        Tom de voz: Entusiasmado, profissional, encorajador e direto. Use emojis ocasionalmente para deixar a conversa leve.
        
        Catálogo de Cursos Disponíveis:
        ${getCoursesContext()}
        
        Regras:
        1. Se o usuário perguntar sobre um tema que temos curso, recomende o curso específico pelo nome exato.
        2. Se o usuário perguntar "qual o melhor curso para iniciantes", analise o nível dos cursos.
        3. Se o usuário perguntar algo fora do contexto de educação/tecnologia, traga gentilmente a conversa de volta para os cursos.
        4. Seja conciso. Não escreva textos gigantes.
        5. Sempre responda em Português do Brasil.`,
        temperature: 0.7, // Criatividade balanceada
      }
    });

    return response.text || "Desculpe, não consegui formular uma recomendação agora.";
  } catch (error) {
    console.error("Erro ao chamar Gemini API:", error);
    return "Estou enfrentando uma instabilidade momentânea em meus servidores neurais. Por favor, tente novamente em alguns instantes.";
  }
};