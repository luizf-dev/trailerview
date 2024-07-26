import '../../sass/Home.scss';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import {Link} from "react-router-dom";
import { BookmarkCheck, Star } from 'lucide-react';


function Home() {


    const [filmes, setFilmes] = useState([]);


    useEffect(()=> {

      async function loadFilmes(){

        const response = await api.get("movie/now_playing", {
          params:{
            api_key: '6bde1d67731ced1a7efeab91daa4a7fc',
            language: "pt-BR",
            page:1
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
                <Link to={"/filme/"+filmes.id}> 
                  <img src={"https://image.tmdb.org/t/p/w500/" +filmes.poster_path} alt={filmes.title} />
                </Link>
                <div className='details'> 
                  <Star size={28}></Star> 
                  <span style={{color:"white"}}>{filmes.vote_average.toFixed(1)}</span> 
                  <BookmarkCheck></BookmarkCheck>               
                </div>
                <strong className='filme-title'>{filmes.title}</strong>
              </div>
            );
          })}
        </section>
        <h2 className="title">Minha Lista</h2>      
        <section>
          {filmes.map((filmes) => {
            return(
              <div key={filmes.id} className='filmes'>
                <Link to={`/filme/${filmes.id}`}> 
                  <img src={"https://image.tmdb.org/t/p/w500/" +filmes.poster_path} alt={filmes.title} />
                </Link>
                <div className='details'> 
                  <Star size={28}></Star> 
                  <span style={{color:"white"}}>{filmes.vote_average}</span> 
                  <BookmarkCheck></BookmarkCheck>               
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