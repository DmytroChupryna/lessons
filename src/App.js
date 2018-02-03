import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
class App extends Component {

  state = {
    name: 'Egor'
  }

  nameChangeHandler = (event)=> { 
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <h1>USERS LIST</h1>
          <UserInput
            changename={this.nameChangeHandler}
            nameCurr={this.state.name} />
            
          <UserOutput name={this.state.name} />
          <UserOutput name='Dmytro' />
        </div>  
      </div>
    );
  }
}

export default App;
