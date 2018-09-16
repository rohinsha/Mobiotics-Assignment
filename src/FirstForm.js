import React, { Component } from "react";
import "./Common-styles.css";

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
      <div className="">
        <form onSubmit={handleNextBtn}>
          <div className="form-group">
            <label>Name</label>
            <input type="text"
              name="personname"
              value={personname}
              className="form-control"
              placeholder="Enter name"
              onChange={event => handleUserInput(event)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email"
              value={email}
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={event => handleUserInput(event)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password"
              name="password"
              value={password}
              className="form-control"
              placeholder="Enter password"
              onChange={event => handleUserInput(event)}
            />
          </div>
          <div>
              {firstFormErrors && firstFormErrors.map(error => <p key={error} className="error-msg">Alert :- {error}!!!</p>)}
          </div>
          <button type="submit" className="button custom-btn center-block">Next</button>
        </form>
      </div>
    );
  }
}
