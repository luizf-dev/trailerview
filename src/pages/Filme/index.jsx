import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import '../../sass/Filme.scss';
import YouTubePlayer from "../../components/YouTubePlayer";
//import getVideos from "../../services/api";



function Filme(){

    const {id} = useParams();
    const [filme, setFilme] = useState([]);    

    useEffect(()=> {
        async function loadFilme(){
            
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '6bde1d67731ced1a7efeab91daa4a7fc',
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data);
            })
            .catch(()=> {
                console.log("Filme não encontrado!")
            })
        }

    loadFilme();
    }, [id]);


    return(
        <div className="container-filme"> 
            <img className="poster" src={"https://image.tmdb.org/t/p/w500/" +filme.poster_path} alt={filme.title} />                            
            <div className="descricao">
                <h2 className="title-details">{filme.title}</h2> 
                <h4 className="title-details">Sinopse:</h4>
                <p className="sinopse">{filme.overview}</p>   
                <YouTubePlayer videoId={id} />             
           </div>
            <div className="ficha-tecnica">
              <h2>Título Original:</h2>
              <h6>{filme.original_title}</h6>
              <h2>Tagline:</h2>
              <h6>{filme.tagline}</h6>
              <h2>Data de Lançamento: </h2>
              <h6>{filme.release_date}</h6>
              <h2>Duração:</h2>
              <h6>{filme.runtime} minutos</h6>
              <h2>País de Origem</h2>
              <h6>{filme.origin_country}</h6>
              <h2>Idioma Original:</h2>
              <h6>{filme.original_language}</h6>
              <h2>Orçamento:</h2>
              <h6>{filme.budget}</h6>
              <h2>Receita:</h2>
              <h6>{filme.revenue}</h6>
            </div>
        </div>
    );
}

export default Filme;