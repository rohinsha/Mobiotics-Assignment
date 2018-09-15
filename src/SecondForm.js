import React, { Component } from "react";
import DatePicker from "react-date-picker";


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
      <div className="form-wrapper">
        <div>
          <label>DOB:</label>
          <DatePicker
            id="example-datepicker"
            selected={dob}
            onChange={handleDob}
            maxDate={new Date()}
            placeholder="Date of Birth"
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            value={phone}
            name="phone"
            onChange={event => handleUserInput(event)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            value={gender}
            name="gender"
            onChange={event => handleUserInput(event)}
            required="required"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button onClick={handleBackBtn}>Back</button>
        <button onClick={handleSubmitBtn}>Submit</button>
        <div>
          {SecondFormErrors &&
            SecondFormErrors.map(error => <p key={error}>Error: {error}</p>)}
        </div>
      </div>
    );
  }
}
