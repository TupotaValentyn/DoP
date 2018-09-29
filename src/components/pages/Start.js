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
            {/*<button>old</button>*/}
          </Link>
        </section>
        <section>
          <Link to='/young' >
            {/*<button>young</button>*/}
          </Link>
        </section>
        <div className='logo'>
          <img src={Logo} alt=""/>
        </div>

      </div>
    )
  }
}