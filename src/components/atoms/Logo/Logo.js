import React from 'react'
import Logo from '../../../assets/Logo1.png'
import { subscribeToTimer } from '../../../api';


export default class LogoB extends React.Component{
  render(){
    return(
      <div className='Logo'>
        <img src={Logo} alt=""/>
      </div>
    )
  }
}
