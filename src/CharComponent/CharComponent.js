import React, { Component } from 'react';

class CharComponent extends Component {
  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    }

    return (
      <h1 style={style} onClick={this.props.delete}>{this.props.chartInput}</h1>
    )
  }
}
export default CharComponent;