import React, { Component } from "react";

export default class FormDataDisplay extends Component {
  render() {
    const { personname, email, Dob, phone, gender } = this.props;
    return (
      <div className="form-wrapper">
        <h2>Form Details</h2>
        <div>
          <label>Name: </label>
          <span> {personname} </span>
        </div>
        <div>
          <label>Email: </label>
          <span> {email} </span>
        </div>
        <div>
          <label>DOB: </label>
          <span> {Dob} </span>
        </div>
        <div>
          <label>Phone: </label>
          <span>{phone} </span>
        </div>
        <div>
          <label>Gender: </label>
          <span> {gender} </span>
        </div>
      </div>
    );
  }
}
