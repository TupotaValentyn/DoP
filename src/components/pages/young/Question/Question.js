import React from 'react'
import { apiTest, getQuestion } from '../../../../api'
import Li from '../../../molecules/Li/Li'
import LogoB from '../../../atoms/Logo/Logo'
import formAnswer from '../../../organisms/formAnswers/formQuestion'
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
          <h3>hello from question young</h3>
        </div>
      )
    }

    console.log(`this - ${timestamp.data['0'].author}`)

    let item1;

    // let items = timestamp.data.map( item => {
    //    return (<li>Author:{item.author} Created: {item.question}</li>)
    // });

    let k = 0;
    let valueQuestion = timestamp.data.map( item => {
      return (<Li onClick={liClick} f  = {k++} name = {`Question:${item.question}`} />)
    });

    console.log( valueQuestion['0'].props)
    let liProps ;

    let name = (valueQuestion.map(item => {
      return(item.props.name)
    }))

    console.log(name)

    let liClick = () =>{
      console.log()
    }



    return(
      <div className='wrapper_young'>
        <LogoB />
        <ol>
          {valueQuestion}

        </ol>
        {/*<formAnswer question = {`this - ${timestamp.data['0'].author}`}/>*/}
      </div>
    )
  }
}