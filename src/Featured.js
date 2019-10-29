import React from 'react';
import './Featured.css'

const Featured = ({ featured }) => {

    return (
        <div className="featured-wrapper">
            {featured.map(f => (
                <div className="div1"> 
                <img src={f.images[0].url} />
                {f.name}<br/>
                {f.tracks.total} tracks
                </div>
            ))}
           
            
        </div>
    )
}

export default Featured;