import React from 'react'
import './formAnswer.css'

export default class formAnswer extends React.Component{
  constructor (props){
    super(props)

  }
  render(){
    return(
      <div className='form_answer'>
        <p>{this.props.question}</p>
        <textarea>

        </textarea>
        <button>Submit</button>
      </div>
    )
  }
}