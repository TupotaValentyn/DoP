import React from 'react'
import { apiTest, valueData } from '../../../api'
import LogoB from '../../atoms/Logo/Logo'
import Li from '../../molecules/Li/Li'
import './Old.css'



export default class Old extends React.Component{

  constructor(props) {
    super(props);
    apiTest((err, timestamp) => this.setState({
      timestamp
    }));
  }


  handleChange = (e) => {
    let name = e.target.question;
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }

    state = {
        timestamp: 'no timestamp yet',
        value: ''
    };




  data = {
    author: 'valik',
    question:  this.state.value
  };




  render(){
    return(
      <div className='wrapper_old'>

        <LogoB />
        <div>
          {/*<form action={this.handleSubmit}>*/}
            <input
              type="text"
              placeholder='Введіть ваше запитання'
              name='question'
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button onClick={() => valueData(this.data)}>Спросить</button>
          {/*</form>*/}
        </div>
        <div>
          <ol>
            {/*<p>*/}
              {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate.*/}
            {/*</p>*/}
            <Li name='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate.'/>
            <Li name='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate.'/>
            <Li name='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate.'/>
            <Li name='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate.'/>
            <Li name='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate.'/>
          </ol>
        </div>

      </div>
    )
  }
}


// {This is the timer value: {this.state.timestamp}