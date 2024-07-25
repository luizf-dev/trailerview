import '../../sass/Home.scss';
import { useEffect, useState } from 'react';
import api from '../../services/api';


function Home() {


    const [filme, setFilmes] = useState([]);


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
        <h1 className="title">Filmes em Alta</h1>
      </div>
    );
  }
  
  export default Home;