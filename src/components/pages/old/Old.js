import React from 'react'
import { apiTest2, apiTest } from '../../../api'

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



  render() {
    console.log(this.state.timestamp.data);
          return (
              <div className='old_question'>
                  <button onClick = {apiTest2}>Test</button>
              </div>
          )
      }
  }