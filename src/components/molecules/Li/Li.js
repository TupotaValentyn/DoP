import React from 'react'
import './Li.css'
import { sendAnswer } from '../../../api'

export default class Li extends React.Component{
  constructor (props){
    super(props)

  }

  state ={
    isOpened: false,
    close: true
  }

  showForm  = ()=>{
    this.setState({isOpened: true, close: false })
    console.log(this.state.isOpened)

  }

  closeForm = (e) =>{
    e.stopPropagation()

    this.setState({isOpened: false, close: true})

    console.log('ggg')
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }

  sendData = (e) => {
    e.stopPropagation()
    sendAnswer({answer: this.state.value, id: this.props.id})
  }

  render(){
    let form = null;

    if(this.state.isOpened && !this.state.close){
      form = <div>
        <p onClick={this.closeForm}> X </p>
        <textarea onChange={this.handleChange}></textarea>
        <button onClick={this.sendData}>Submit</button>
      </div>
    }else{
      form = null
    }


    return(
      <li className='LI' id={this.props.id} onClick={this.showForm} >
        {this.props.name}
        {form}

       </li>
    )
  }
}