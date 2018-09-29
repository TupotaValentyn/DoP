import React from 'react'
import { apiTest } from '../../../api'

export default class Old extends React.Component{

  constructor(props) {
    super(props);
    apiTest((err, timestamp) => this.setState({
      timestamp
    }));
  }

  state = {
    timestamp: 'no timestamp yet'
  };



  render(){
    return(
      <div className='old_question'>
        <button onClick={apiTest}>for lex</button>
        This is the timer value: {this.state.timestamp}
      </div>
    )
  }
}