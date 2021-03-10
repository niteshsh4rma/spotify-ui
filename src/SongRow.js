import React from 'react'
import './SongRow.css'

function SongRow({track = "test"}){
    return(
        <div className="songRow">
            <img 
                src={track.album.images[0].url}
                className="songRow__album" />
            <div className="songRow__info">
                <h1>{track.name}</h1>

                {track.artists.map(artist => {
                    console.log(artist)
                })}

                <p>
                    {track.artists.map((artist) => artist.name).join(",")} - {" "} {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow