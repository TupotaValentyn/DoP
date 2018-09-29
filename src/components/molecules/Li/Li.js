import React from 'react'
import './Li.css'

export default class Li extends React.Component{
  constructor (props){
    super(props)

  }
  render(){
    return(
      <li>{this.props.name}</li>
    )
  }
}