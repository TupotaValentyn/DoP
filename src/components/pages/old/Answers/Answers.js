import React from 'react'
import LogoB from '../../../atoms/Logo/Logo'
import './Answers.css'
import LiAnswers from '../../../molecules/LiAnswers/LiAnswers'
import { finalResult, userQuestion } from '../../../../api'


export default class Answers extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    finalResult((err, data) => this.setState({timestamp: data}))
    userQuestion();
  }

  state = {
    timestamp: undefined,
    value: ''
  };



  render(){

    if(this.state.timestamp === undefined){
      return <div></div>
    }
    const { timestamp } = this.state;
    console.log(timestamp)

    let itemValue = timestamp.data.map( item => {
      return (<LiAnswers  question = {`Запитання : ${item.question}`} answers = {`Відповідь : ${item.answers}`}/>)
    });

    return(
      <div className='old_answers'>
        <LogoB />
        <ol>
          {/*<LiAnswers />*/}
          {itemValue.reverse()}
        </ol>
      </div>
    )
  }
}