import api from "./api";

async function getVideos(id) {
  try {
    const response = await api.get(`/movie/${id}/videos`, {
      params: {
        api_key: '6bde1d67731ced1a7efeab91daa4a7fc',
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