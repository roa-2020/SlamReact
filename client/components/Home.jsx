import React from 'react'
import Slider from './Slider'
import {Link, useLocation} from 'react-router-dom'


const Home = (props) => {
  const current = useLocation().pathname;
  console.log(current)
  console.log(props)
    return (
      <>
        <Link to="/Scroller" onClick={()=>{props.toggle("dark")}}>Go to the Dark Scroll</Link><br></br>
        <Link to="/Scroller" onClick={()=>{props.toggle("light")}}>Go to the Light Scroll</Link><br></br>
        <Link to="/Banner" onClick={()=>{props.toggle("light")}}>Go to the Bruce</Link><br></br>
        <Link to="/Banner" onClick={()=>{props.toggle("dark")}}>Go to the Hulk</Link>
        <Slider value="Meow" />
      </>
    )
}

export default Home

{/* <Link className={current === "/Banner" ? "active" : ""} to="/Banner">
Bruce   onClick={props.toggle}
</Link> */}