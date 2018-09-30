import React from 'react'
import Logo from '../../../assets/Logo1.png'
import { subscribeToTimer } from '../../../api';
import { Link } from 'react-router-dom'

export default class LogoB extends React.Component{
  render(){
    return(
      <div className='Logo'>
        <Link to="/">
          <img src={Logo} alt=""/>
        </Link>
      </div>
    )
  }
}
