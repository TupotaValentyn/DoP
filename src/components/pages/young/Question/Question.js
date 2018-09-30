import React from 'react'
import { apiTest, getQuestion } from '../../../../api'
import Li from '../../../molecules/Li/Li'
import LogoB from '../../../atoms/Logo/Logo'
import './Question.css'


export default class QuestionY extends React.Component{

  constructor(props) {
    super(props);
    apiTest((err, timestamp) => this.setState({
      timestamp
    }));
    this.state = {
      timestamp: undefined,
      value: '',
      modalIsOpen: false,
      question: ''
    };

  }

  componentDidMount() {

    this.setState({timestamp: getQuestion()})
  }


  render(){
    const { timestamp } = this.state;
    console.log(timestamp)
    if(timestamp === undefined) {
      return(
        <div className='question_young'>

        </div>
      )
    }

    console.log(`this - ${timestamp.data['0'].author}`)


    // let items = timestamp.data.map( item => {
    //    return (<li>Author:{item.author} Created: {item.question}</li>)
    // });

    let valueQuestion = timestamp.data.map( item => {
      return (<Li onClick={liClick}  name = {`Запитання : ${item.question}`} id = {item._id} />)
    });

    let liClick = () =>{
      console.log()
    }


    return(
      <div className='wrapper_young'>
        <LogoB />
        <ol>
          {valueQuestion.reverse()}

        </ol>
        {/*<formAnswer question = {`this - ${timestamp.data['0'].author}`}/>*/}
      </div>
    )
  }
}