import React from 'react'
import Hash from 'string-hash'
import artworks from '../../data/artworks.js'

class Banner extends React.Component {

    constructor (props) {
        super(props)
        this.state={id: this.randomArtwork(true)}
    }

    randomArtwork = (initial) => {
        const length = artworks.length;
        const oldId = (!initial ? this.state.id : '')
        let id;
        do {
            id = Math.floor(Math.random() * length)
        } while (id === oldId)
        return id   
    }

    updateId = () =>{
        this.setState({
            id: this.randomArtwork()
        })
    }
    render(){

        return (
            <>
            <div id="pixelBoard">
        
                {
                    artworks[this.state.id].map((row, r) => {
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
            <button onClick={this.updateId}>New Picture</button>
                </>

        )
    }
}


export default Banner