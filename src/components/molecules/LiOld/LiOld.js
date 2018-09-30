import React from 'react'
import './LiOld.css'

export default class LiOld extends React.Component{
  constructor (props){
    super(props)

  }

  state ={
    isOpened: false
  }

  showForm = () =>{
    this.setState({isOpened: !this.state.isOpened})
  }

  render(){



    return(
      <li className='liOld'  onClick={this.showForm} >
        {this.props.name}
        <div><p>{this.props.answer}</p></div>


       </li>
    )
  }
}