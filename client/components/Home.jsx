import React from 'react'
import {useLocation} from 'react-router-dom'

class Home extends React.Component {
  
  render (){
    return (
      <>
        {console.log(useLocation())}
        <h1>Home</h1>
        <p>Welcome to home</p>
        <p>Go to the Dark Scroll</p>
        <p>Go to the Light Scroll</p>
      </>
    )
  }
}

export default Home