import React, { Component } from "react";

export default class FirstForm extends Component {
  render() {
    const {
      personname,
      email,
      password,
      handleUserInput,
      handleNextBtn,
      firstFormErrors
    } = this.props;
    return (
      <div className="form-wrapper">
        <form>
          <div>
            <label>Name:</label>
            <input
              value={personname}
              name="personname"
              onChange={event => handleUserInput(event)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              value={email}
              name="email"
              onChange={event => handleUserInput(event)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              value={password}
              name="password"
              onChange={event => handleUserInput(event)}
            />
          </div>
          <button onClick={handleNextBtn}>Next</button>
          <div>
            {firstFormErrors && firstFormErrors.map(error => <p key={error}>Error: {error}</p>)}
          </div>
        </form>
      </div>
    );
  }
}
