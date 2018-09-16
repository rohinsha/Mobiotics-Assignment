import React, { Component } from "react";

export default class FormDataDisplay extends Component {
  render() {
    const { personname, email, dob, phone, gender } = this.props;
    console.log(dob);
    return (
      <div className="form-wrapper">
        <h2 className="userDetails">Form Details</h2>
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
          <span> {dob} </span>
        </div>
        <div>
          <label>Phone: </label>
          <span> {phone} </span>
        </div>
        <div>
          <label>Gender: </label>
          <span> {gender} </span>
        </div>
      </div>
    );
  }
}
