import React from 'react'
import './Li.css'

export default class Li extends React.Component{
  constructor (props){
    super(props)

  }
  render(){
    return(
      <li className='LI' onClick={this.props.onClick} f = {this.props.f}>{this.props.name}</li>
    )
  }
}