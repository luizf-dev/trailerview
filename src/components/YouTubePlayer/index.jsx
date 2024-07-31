import React from "react";
import YouTube from 'react-youtube';
import "../../sass/Trailer.scss";


function YouTubePlayer({videoId}){

    return(
        <div className="trailer-container">
            <YouTube videoId={videoId}/>
        </div>
    );
}

export default YouTubePlayer;