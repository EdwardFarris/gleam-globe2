import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../utils/API";


// import { ENAMETOOLONG } from 'constants';
//  var database = require(".../config/config.js");
// import './config/config.js';
// import db  from '../../models/user.js';


class SignInForm extends Component {
 constructor() {
   super();

   this.state = {
     username: '',
     email: '',
     password: ''
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }



 handleChange(e) {
   let target = e.target;
   let value = target.type === 'checkbox' ? target.checked : target.value;
   let name = target.name;

   this.setState({
     [name]: value
   });
 }


 handleSubmit(e) {

   e.preventDefault();

   let loadUser = {

     username: this.state.username,
     password: this.state.password,
     email: this.state.email
   }
   // console.log(newUser);

   API.getAllUsers(loadUser).then(res => console.log(res))

    }
 // handleSubmit(e) {
 //   e.preventDefault();

 //   console.log('The form was submitted with the following data:');
 //   console.log(this.state);
 // }

 render() {
   return (
     <div className="FormCenter">
       <form onSubmit={this.handleSubmit} className="FormFields">


         <div className="FormField">
           <label className="FormField__Label" htmlFor="username">username</label>
           <input type="username" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />
         </div>

         <div className="FormField">
           <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
           <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
         </div>

         <div className="FormField">
           <label className="FormField__Label" htmlFor="password">Password</label>
           <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
         </div>

         <div className="FormField">
           <button className="FormField__Button mr-20">Sign In</button> <Link to="/Mainpage/main" className="FormField__Link">Home Page</Link>
         </div>
       </form>
     </div>
   );
 }
}

export default SignInForm;