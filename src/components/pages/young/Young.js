import React from 'react'
import Li from '../../molecules/Li/Li'
import LogoB from '../../atoms/Logo/Logo'
import './Young.css'

export default class Young extends React.Component{
  render(){

    return(
      <div className='wrapper_young'>
        <LogoB />

        <ol>
          <Li name= 'Valik' />
          <Li name= 'some1' />
          <Li name= 'some2' />
          <Li name= 'some3' />
          <Li name= 'some4' />
          <Li name= 'some5' />

        </ol>

      </div>
    )
  }
}