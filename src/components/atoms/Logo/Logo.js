import React from 'react'
import Logo from '../../../assets/Logo.png'


export default class LogoB extends React.Component{
  render(){
    return(
      <div className='Logo'>
        <img src={Logo} alt=""/>
      </div>
    )
  }
}
