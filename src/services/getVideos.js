import api from "./api";
import apiKey from "./config";

async function getVideos(id) {
  
  try {
    const response = await api.get(`/movie/${id}/videos`, {
      params: {
        api_key: apiKey,
        language: 'pt-BR',
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar vídeos do filme:', error);
    return [];
  }
}

export default getVideos;