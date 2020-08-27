import React from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components';
import {slideInRight, slideOutLeft} from 'react-animations'

const Slide = styled.div`animation: 10s ${keyframes`${slideInRight}, ${slideOutLeft}`}`

class Slider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: '' 
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({display: 'hidden'})
    }, 9500)
  } 


  
  render (){
    return (
      <>
        <Slide className={'anime ' + this.state.display}>{this.props.value}</Slide>
      </>
    )
  }
}

export default Slider