import React from "react";
import YouTube from 'react-youtube';
import "../../sass/Trailer.scss";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function YouTubePlayer(){

    const {id} = useParams();

    const [videoId, setVideoId] = useState(null);

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

      useEffect(() => {
        const fetchVideo = async () => {
          const videos = await getVideos(id);
          const trailer = videos.find(
            (video) => video.type === 'Trailer' && video.site === 'YouTube'
          );
          if (trailer) {
            setVideoId(trailer.key);
          }
        };
    
        fetchVideo();
      }, [id]);

    return(
        <div className="trailer-container">
        {videoId ? (
          <YouTube videoId={videoId} />
        ) : (
          <p className="titles">Trailer não disponível...</p>
        )}
      </div>
    );
}

export default YouTubePlayer;