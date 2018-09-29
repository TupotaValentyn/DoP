import React from 'react'
import { apiTest, getQuestion } from '../../../../api'


export default class QuestionY extends React.Component{

  constructor(props) {
    super(props);
    apiTest((err, timestamp) => this.setState({
      timestamp
    }));
    this.state = {
      timestamp: 'no timestamp yet',
      value: ''
    };

  }

  componentDidMount() {

    this.setState({timestamp: getQuestion()})
  }



  render(){
    console.log(this.state.timestamp)

    return(
      <div className='question_young'>
        <h3>hello from question young</h3>
      </div>
    )
  }
}