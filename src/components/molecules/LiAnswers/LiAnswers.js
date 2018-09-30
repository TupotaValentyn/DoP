import React from 'react'
import './LiAnswers.css'

export default class LiAnswers extends React.Component{
  constructor (props){
    super(props)
  }

  state = {
    isOpened: false
  }

  render(){
    let par = null

    this.showMore = () => {
      this.setState({isOpened: !this.state.isOpened})
    }

    return(

      <li className='liAnswers' onClick={this.showMore}>
        <p>{this.props.question}</p>
        <p>{this.props.answers}</p>
      </li>
    )
  }
}