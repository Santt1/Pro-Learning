// Placeholder service until real implementation is provided
export const getCourseRecommendation = async (query: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esta é uma resposta simulada para: "${query}". O serviço real será configurado em breve.`);
    }, 1000);
  });
};