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
    let form = null;

    if(this.state.isOpened){
      form = <div><p>Answer {this.props.answer}</p></div>
    }else{
      form = null
    }


    return(
      <li className='liOld'  onClick={this.showForm} >
        {this.props.name}

        {form}

       </li>
    )
  }
}