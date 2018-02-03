import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return (
      <div className="form-group row">
        <input type="text"
          className="form-control col-sm-6"
          onChange={this.props.changename}
          value={this.props.nameCurr}/>
      </div>
    )
  }
}
export default UserInput;