import React from 'react'
import { apiTest, getQuestion } from '../../../../api'
import Li from '../../../molecules/Li/Li'


export default class QuestionY extends React.Component{

  constructor(props) {
    super(props);
    apiTest((err, timestamp) => this.setState({
      timestamp
    }));
    this.state = {
      timestamp: undefined,
      value: ''
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

    let items = timestamp.data.map( item => {
       return (<li>Author:{item.author} Created: {item.question}</li>)
    });

    let items1 = timestamp.data.map( item => {
      return (<Li name = {`Author:${item.question}`} />)
    });


    return(
      <div className='question_young'>
        <h3>data received</h3>
        <ul>
          {items}
          <Li name={timestamp.data['0'].author}/>
          <hr/>
          {items1}
        </ul>
      </div>
    )


  }
}