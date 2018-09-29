import React from 'react'
import { apiTest } from '../../../api'

export default class Old extends React.Component{
  render(){
    return(
      <div className='old_question'>
        <button onClick={apiTest}>for lex</button>
      </div>
    )
  }
}