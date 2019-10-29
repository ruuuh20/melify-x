import React from 'react';
import './Featured.css'

const Featured = ({ featured }) => {

    return (
        <div className="featured-wrapper">
            <h4>Featured Playlists</h4>
            {featured.map(f => (
                <div className="div1"> 
                <img src={f.images[0].url} />
                <div className="playlist-info">
                {f.name}<br/>
                {f.tracks.total} tracks
                </div>
                </div>
            ))}
           
            
        </div>
    )
}

export default Featured;