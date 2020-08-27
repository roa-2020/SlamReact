import React from 'react'
import Slider from './Slider'

class Home extends React.Component {
  
  render (){
    return (
      <>
        <h1>Home</h1>
        <p>Welcome to home</p>
        <p>Go to the Dark Scroll</p>
        <p>Go to the Light Scroll</p>
        <Slider value="Meow" />
      </>
    )
  }
}

export default Home