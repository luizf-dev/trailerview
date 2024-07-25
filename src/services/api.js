import axios from "axios";

//!API URL COMPLETA
//_ https://api.themoviedb.org/3/movie/11?api_key=6bde1d67731ced1a7efeab91daa4a7fc'


//!Base da url
//_https://api.themoviedb.org/3/

//!rotas da api
//movie/550?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;