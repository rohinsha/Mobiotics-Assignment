import React, { Component } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import FormDataDisplay from "./FormDataDisplay";
import PropTypes from 'prop-types';
import "./App.css";

export default class Forms extends Component {
  state = {
    personname: "",
    email: "",
    password: "",
    dob: new Date(),
    phone: "",
    gender: "",
    isNext: false,
    isSubmit: false,
    firstFormErrors: [],
    secondFormErrors: []
  };

  validateFirstForm(personname, email, password) {
    const firstFormErrors = [];
    if (personname.length === 0) {
      firstFormErrors.push("Name can't be empty");
    } else if (!personname.match(/^[a-zA-Z\s]*$/)) {
      firstFormErrors.push("Name should only contain letters");
    } else if (email.length === 0) {
      firstFormErrors.push("Email field can't be left blank");
    } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      firstFormErrors.push("Enter valid email id");
    } else if (password.length === 0) {
      firstFormErrors.push("Password field can't be left blank");
    } else if (
      !password.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
      )
    ) {
      firstFormErrors.push(
        " should have one Uppercase, one lowercase, one digit and atleast specail character"
      );
    } else {
      return true;
    }
    return firstFormErrors;
  }

  validateSecondForm(dob, phone, gender) {
    const secondFormErrors = [];
    if (dob.length === 0) {
      secondFormErrors.push("Date of Birth field can't be left blank");
    } else if (phone.length === 0) {
      secondFormErrors.push("Phone number field can't be left blank");
    } else if (!phone.match(/^[0-9]*$/)) {
      secondFormErrors.push("Phone number should contain only digits");
    } else if (phone.length !== 10) {
      secondFormErrors.push("Phone number should be of 10 digits");
    }

    //  else if (gender.val()=="") {
    //   errors.push("Password field can't be left blank");
    // }
    else {
      return true;
    }
    return secondFormErrors;
  }

  handleDob = date => {
    this.setState({
      dob: date
    });
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
      firstFormErrors: [],
      secondFormErrors: []
    });
  };

  handleBackBtn = e => {
    e.preventDefault();

    this.setState({
      isNext: false
    });
  };

  nextBtnHandler = e => {
    e.preventDefault();
    const { personname, email, password } = this.state;
    const firstFormErrors = this.validateFirstForm(personname, email, password);
    if (firstFormErrors.length > 0) {
      this.setState({ firstFormErrors });
      return;
    } else {
      this.setState({
        isNext: true
      });
    }
  };

  secondFormHandler = e => {
    e.preventDefault();

    const { dob, phone, gender } = this.state;

    const secondFormErrors = this.validateSecondForm(dob, phone, gender);
    if (secondFormErrors.length > 0) {
      this.setState({ secondFormErrors });
      return;
    } else {
      this.setState({
        isSubmit: !this.state.isSubmit
      });
    }
  };

  render() {
    const {
      personname,
      password,
      firstFormErrors,
      secondFormErrors,
      dob,
      phone,
      gender,
      email
    } = this.state;

    var secondForm;
    if (this.state.isNext) {
      secondForm = (
        <SecondForm
          dob={dob}
          phone={phone}
          gender={gender}
          handleUserInput={this.handleUserInput}
          handleSubmitBtn={this.secondFormHandler}
          handleBackBtn={this.handleBackBtn}
          handleDob={this.handleDob}
          SecondFormErrors={secondFormErrors}
        />
      );
    } else {
      secondForm = "";
    }

    return (
      <div className="container">
        <div className="">
          {this.state.isNext ? (
            ""
          ) : (
            <FirstForm
              personname={personname}
              email={email}
              password={password}
              handleUserInput={this.handleUserInput}
              handleNextBtn={this.nextBtnHandler}
              firstFormErrors={firstFormErrors}
            />
          )}
        </div>

        <div>{this.state.isSubmit ? "" : secondForm}</div>
        <div>
          {this.state.isSubmit && (
            <FormDataDisplay
              personname={personname}
              email={email}
              password={password}
              dob={dob}
              phone={phone}
              gender={gender}
            />
          )}
        </div>
      </div>
    );
  }
}


Forms.propTypes = {
  personname: PropTypes.string,
  email:PropTypes.string,
  password:PropTypes.string,
  dob:PropTypes.date,
  mobile:PropTypes.number,
  gender:PropTypes.string
};