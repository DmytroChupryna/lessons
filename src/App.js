import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    textInput: 'MyText'
  }

  inputTextChangeHandler = (event) => {
    this.setState({
      textInput: event.target.value
    })
  }

  deleteCharHandler = (idx) => {
    let bufferText = this.state.textInput;
    bufferText = bufferText.split('')
    bufferText.splice(idx, 1);
    bufferText = bufferText.join('');
    
    this.setState({ textInput: bufferText})
  }

  render() {

    let charList = (
      this.state.textInput.split('').map((item, idx) => { 
        return <CharComponent
          chartInput={item}
          delete={() => this.deleteCharHandler(idx)}
          key={idx} />
      })
    )

    return (
      <div className="App">
        <input type="text" onChange={this.inputTextChangeHandler} value={this.state.textInput}/>
        <p>{this.state.textInput.length}</p>
        <ValidationComponent lengthParagraf={this.state.textInput.length} />
        {charList}
        <br />
        <hr/>
      </div>
    );
  }
}

export default App;
