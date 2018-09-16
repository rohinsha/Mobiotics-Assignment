import React, { Component } from "react";
import "./Common-styles.css";

export default class SecondForm extends Component {
  render() {
    const {
      dob,
      phone,
      gender,
      handleUserInput,
      handleSubmitBtn,
      handleBackBtn,
      handleDob,
      SecondFormErrors
    } = this.props;
    return (
      <div className="">
        <form onSubmit={handleSubmitBtn}>
          <div className="form-group">
            <label>DOB</label>
            <input value={dob} 
            name="date"
            type="date"
            className="form-control"
            placeholder="Enter Dob"
            onChange={handleDob} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            value={phone}
            name="phone"
            placeholder="Enter Phone number"
            className="form-control"
            onChange={event => handleUserInput(event)}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            value={gender}
            className="form-control"
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
