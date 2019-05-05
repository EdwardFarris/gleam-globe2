import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

  return (
    <div>
    <Link className="gleam" to="/">Gleam Globe</Link>
    <ul id="navbackground" className="nav justify-content-end">
    <li className="nav-item">
        <Link className="nav-link active navblack container" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navblack" to="/createevent">Create Event </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navblack" to="/volunteer">Volunteer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navblack" to="/map">Map</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navblack" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link navblack" to="/wastereduction">Reduce Waste</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link navblack" to="/aboutus">About Us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link navblack" onClick={this.onLogoutClick}>Signout</Link>
    </li>
    </ul>
   
  
  </div>
  )
}

}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);