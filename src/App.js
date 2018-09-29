import React, { Component } from 'react';
import Start from './components/pages/Start'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import QuestionY from './components/pages/young/Question/Question'
import Old from './components/pages/old/Old'
import Young from './components/pages/young/Young'
// import Old from './components/pages/old/Old/Old'
// import QuestionY from './components/pages/young/Old/Old'

class App extends Component {

  render(){
      return(
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Start} />
            <Route exact path='/old' component={Old} />
            <Route path='/young' component={Young} />
            <Route path='/question' component={QuestionY} />
          </Switch>
        </div>
      )
    }
}

export default App;
