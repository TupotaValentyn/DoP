import React from 'react'
import {faqResult, getFAQ, valueData} from '../../../api'
import LogoB from '../../atoms/Logo/Logo'
import LiOld from '../../molecules/LiOld/LiOld'
import { Link } from 'react-router-dom'
import './Old.css'



export default class Old extends React.Component{

  // constructor(props) {
  //   super(props);
  //   getFAQ((err, timestamp) => this.setState({
  //     timestamp
  //   )));
  //
  // }

  sendQuestion = () =>{
    valueData({author: 'valik', question: this.state.value})
    this.setState({isOpened: !this.state.isOpened})
  }

  componentDidMount() {
    faqResult((err, data) => this.setState({timestamp: data}))
    getFAQ();
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }

  state = {
    timestamp: undefined,
    value: ''
  };

  data = {
    author: 'valik',
    question: this.state.value
  }

  render(){
    if(this.state.timestamp === undefined){
      return <div></div>
    }
    const { timestamp } = this.state;
    console.log(timestamp)

    let itemValue = timestamp.data.map( item => {
      return (<LiOld  name = {`Question:${item.question}`} answer = {`Answer:${item.answer}`}/>)
    });
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
          <div>
            <button onClick={this.sendQuestion}>Спросить</button>
            <button><Link to='./answers'>Answer</Link></button>
          </div>
          {console.log(this.state)}
          {/*</form>*/}
        </div>
        <div>
          <ol>
            {/*<p>*/}
              {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate.*/}
            {/*</p>*/}
            {itemValue.reverse()}
          </ol>
        </div>

      </div>
    )
  }
}


// {This is the timer value: {this.state.timestamp}