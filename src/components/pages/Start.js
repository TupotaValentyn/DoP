import React from 'react'
import './Start.css'

export default class Start extends React.Component{
  render(){
    return(
      <div className='wrapper'>
        <section>
          <input type='text' value='young'/>
        </section>
        <section>
          <input type='text' value='old'/>
        </section>
        <div className='logo'>
          <img src='' alt="" />
        </div>

      </div>
    )
  }
}