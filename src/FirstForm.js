import React, { Component } from "react";
import "./Common-styles.css";

export default class FirstForm extends Component {
  render() {
    const { personname, email, password, handleUserInput, handleNextBtn, firstFormErrors} = this.props;
    return (
      <div className="">
        <form onSubmit={handleNextBtn} className="custom-form">
          <div className="form-group">
            <label className="label">Name</label>
            <input type="text"
              name="personname"
              value={personname}
              className="form-control input"
              placeholder="Enter name"
              onChange={event => handleUserInput(event)}
            />
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input type="email"
              value={email}
              name="email"
              className="form-control input" 
              placeholder="Enter email"
              onChange={event => handleUserInput(event)}
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input type="password"
              name="password"
              value={password}
              className="form-control input"
              placeholder="Enter password"
              onChange={event => handleUserInput(event)}
            />
          </div>
          <div>
              {firstFormErrors && firstFormErrors.map(error => <h4 key={error} className="error-msg">Alert :- {error}!!!</h4>)}
          </div>
          <button type="submit" className="button custom-btn center-block">Next</button>
        </form>
      </div>
    );
  }
}
