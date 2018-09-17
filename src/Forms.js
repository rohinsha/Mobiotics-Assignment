import React, { Component } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import FormDataDisplay from "./FormDataDisplay";
import PropTypes from "prop-types";
import "./Common-styles.css";

export default class Forms extends Component {
  state = {
    personname: "",
    email: "",
    password: "",
    dob:"",
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
      console.log(personname);
      firstFormErrors.push("Name field can't be empty");
    
    } else if (!personname.match(/^[a-zA-Z\s]*$/)) {
      firstFormErrors.push("Name should contain only letters");
    
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
        "Password should have atleast one uppercase, one lowercase, one digit and one special character"
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
    }else if (phone.length === 0) {
      secondFormErrors.push("Phone number field can't be left blank");
    } else if (!phone.match(/^[0-9]*$/)) {
      secondFormErrors.push("Phone number should contain only digits");
    } else if (phone.length !== 10) {
      secondFormErrors.push("Phone number should be of 10 digits");
    }else if (gender.length===0) {
      secondFormErrors.push("Gender field can't be left blank");
    }
    else {
      return true;
    }
    return secondFormErrors;
  }

  handleDob=e=> {
    const value=e.target.value;
    this.setState({
      dob:value
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
    }else {
      var dobDate=dob.split("-");
      dobDate= String(dobDate[2]+"-"+dobDate[1]+"-"+dobDate[0]);
      this.setState({
        isSubmit: !this.state.isSubmit,
        dob:dobDate
      });
     document.getElementById('title').style.display="none";
     document.getElementById('root').style.cssText="background-image:none";
     document.getElementsByClassName("main-wrapper")[0].setAttribute("style","width:40%;color:white;border:20px solid white");
    }

  }

  render() {
    const { personname, password, firstFormErrors, secondFormErrors, dob, phone, gender, email } = this.state;
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
      <div className="main-wrapper">
        <div className="wrapper text-center">
          <h2 className="title text-left" id="title">User Form</h2>
          <div>
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
      </div>
    );
  }
}


Forms.propTypes = {
  personname: PropTypes.string,
  email:PropTypes.string,
  password:PropTypes.string,
  dob: PropTypes.number,
  mobile:PropTypes.number,
  gender:PropTypes.string
};