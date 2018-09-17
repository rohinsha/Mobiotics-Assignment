import React, { Component } from "react";
import "./Common-styles.css";

export default class SecondForm extends Component {
  render() {
    const {dob, phone, gender, handleUserInput, handleSubmitBtn, handleBackBtn, handleDob, SecondFormErrors } = this.props;
    return (
      <div className="">
        <form onSubmit={handleSubmitBtn} className="custom-form">
          <div className="form-group">
            <label className="label">DOB</label>
            <input value={dob} 
            name="date"
            type="date"
            className="form-control input"
            placeholder="Enter Dob"
            onChange={handleDob} />
        </div>
        <div className="form-group">
          <label className="label">Phone</label>
          <input
            value={phone}
            name="phone"
            placeholder="Enter Phone number"
            className="form-control input"
            onChange={event => handleUserInput(event)}
          />
        </div>
        <div className="form-group">
          <label className="label">Gender</label>
          <select
            value={gender}
            className="form-control input"
            name="gender"
            onChange={event => handleUserInput(event)}
            
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          {SecondFormErrors &&
            SecondFormErrors.map(error => <p key={error} className="error-msg">Alert : {error}</p>)}
        </div>
        <button onClick={handleBackBtn} className="button custom-btn">Back</button>
        <button type="submit" className="button custom-btn submit-btn">Submit</button>
      </form>  
      </div>
      
    );
  }
}
