import React from 'react'
import { Link } from 'react-router-dom'
import './Start.css'
import Logo from '../../assets/Logo1.png'

export default class Start extends React.Component{
  render(){
    return(
      <div className='wrapper'>
        <section>
          <Link to='/old' >
            Задати питання
          </Link>
        </section>
        <section>
          <Link to='/young' >
            Відповідати на питання
          </Link>
        </section>
        <div className='logo'>
          <img src={Logo} alt=""/>
        </div>

      </div>
    )
  }
}