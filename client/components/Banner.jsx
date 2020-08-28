import React from 'react'
import Hash from 'string-hash'
import artworks from '../../data/artworks.js'

class Banner extends React.Component {
    randomArtwork = () => {
        const length = artworks.length;
        const id = Math.floor(Math.random() * length)
        return id
    }
    render(){

        return (

            <div id="pixelBoard">
        
                {
                    artworks[this.randomArtwork()].map((row, r) => {
                        return(
                            <div key={Hash(`${row} ${r}`)} className="row">

                                {row.map((col, c) => {
                                    return <div key={Hash(`${row} ${col} ${c}`)} className={col}> </div>
                                })}

                            </div>
                        )

                    })
                }

            </div>


        )
    }
}


export default Banner