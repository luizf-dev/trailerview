import '../../sass/Home.scss';
import { useEffect, useState } from 'react';
import api from '../../services/api';
//import apiKey from '../../services/config';
import {Link} from "react-router-dom";
import { Star } from 'lucide-react';



function Home() {


    const [filmes, setFilmes] = useState([]);

    useEffect(()=> {

      async function loadFilmes(){    
            
        const apiKey = '6bde1d67731ced1a7efeab91daa4a7fc';

        const response = await api.get("movie/now_playing", {
          params:{
            api_key: apiKey,
            language: "pt-BR"            
          }
        })
        //console.log(response.data.results);
        setFilmes(response.data.results);
      }

      loadFilmes();

    }, []);


    return (
      <div className='container'>  
        <h2 className="title">Filmes em Alta</h2>      
        <section>
          {filmes.map((filmes) => {
            return(
              <div key={filmes.id} className='filmes'>
                <Link to={`/filme/${filmes.id}`}> 
                  <img className='poster-home' src={"https://image.tmdb.org/t/p/w500/" +filmes.poster_path} alt={filmes.title} />
                </Link>
                <div className='details'> 
                  <Star size={28}></Star> 
                  <span style={{color:"white"}}>{filmes.vote_average.toFixed(1)}</span>                                 
                </div>
                <strong className='filme-title'>{filmes.title}</strong>
              </div>
            );
          })}
        </section>     
      </div>
    );
  }
  
  export default Home;