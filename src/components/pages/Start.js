import React from 'react'
import { Link } from 'react-router-dom'
import './Start.css'

export default class Start extends React.Component{
  render(){
    return(
      <div className='wrapper'>
        <section>
          <Link to='/old' >
            <input type='text' value='old'/>
          </Link>
        </section>
        <section>
          <Link to='/young' >
            <input type='text' value='young'/>
          </Link>
        </section>
        <div className='logo'>
          <img src='' alt="" />
        </div>

      </div>
    )
  }
}