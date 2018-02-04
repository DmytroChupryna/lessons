import React, { Component } from 'react';

class ValidationComponent extends Component {
  render() {
    let errText = this.props.lengthParagraf < 5 ? 'Text too short' : 'Text long enough';

    return (
      <div className="row">
        <p>{errText}</p>
      </div>
    )
  }
}
export default ValidationComponent;