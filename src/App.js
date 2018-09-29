import React, { Component } from 'react';
import Start from './components/pages/Start'
import './App.css';
import Old from './components/pages/old/Old'
import Young from './components/pages/young/Young'
import Question from './components/pages/old/Question/Question'
import QuestionY from './components/pages/young/Question/Question'

class App extends Component {
    render(){
      return(
        <div className='App'>
            <Start />
        </div>
      )
    }
}

export default App;
