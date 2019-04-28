import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import API from "../utils/API";
// import { ENAMETOOLONG } from 'constants';



class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.loadusers();
  }

  // loadusers = () => {
  //   signin.users()
  //     .then(res =>
  //       this.setState({ books: res.data, username: "", password: "", email: "", confirmPassword: ""})
  //     )
  //     .catch(err => console.log(err));
  // };


  handleChange(e) {
    // let target = e.target;
    // let value = target.type === 'checkbox' ? target.checked : target.value;
    // let name = target.name;

    const { name, value } = e.target

    this.setState({
      [name]: value
    });
  }

      


  handleSubmit(e) {

    e.preventDefault();

    let newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      email: this.state.email
    }
    // console.log(newUser);

    API.addNewUser(newUser).then(res => console.log(res))

     }


  //  handleFormCenter = event => {
  //   event.preventDefault();
  //   if (this.state.firstname && this.state.lastname && this.state.email && this.state.password) {
  //     signin.saveFormCenter({
  //       firstname: this.state.firstname,
  //       lastname: this.state.lastname,
  //       email: this.state.email,
  //       password: this.state.password
  //     })
  //       .then(res => this.loadFormCenter())
  //       .catch(err => console.log(err));
  //   }
  
  // };



render() {
  return (
    <div className="FormCenter">
      <form onSubmit={this.handleSubmit} className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstname">First Name</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter Your first Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="Lastname">Last Name</label>
          <input type="text" id="Lastname" className="FormField__Input" placeholder="Enter Your Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstname">Username</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter A Username" name="username" value={this.state.username} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="confirmPassword">Confirm Password</label>
          <input type="ConfirmPassword" id="ConfirmPassword" className="FormField__Input" placeholder="Confirm Password" name="confirmPassword" value={this.state.password} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>

        {/* <div className="FormField">
          <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
          </label>
        </div> */}

        <div className="FormField">
          <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign Up</button> <Link to="/SignInForm" className="FormField__Link">I'm already member</Link>
        </div>
      </form>
    </div>
  );
}
}


export default SignUpForm;