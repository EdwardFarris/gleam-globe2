import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


export const Navbar=() => {
  return (<div>
    <Link className="gleam" to="/">Gleam Globe</Link>
    <ul id="navbackground" className="nav justify-content-end">
    <li className="nav-item">
        <Link className="nav-link active navblack container" to="/">Home</Link>
      </li>
      <li className="nav-item">
<<<<<<< HEAD
        <Link className="nav-link navblack" to="/volunteer">Volunteer</Link>
=======
        <Link className="nav-link navblack" to="/createevent">Create Event</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navblack" to="/calendar">Volunteer</Link>
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
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
<<<<<<< HEAD
    <li className="nav-item">
      <Link className="nav-link navblack" to="/aboutus">About Us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link navblack" to="/login">LogIn</Link>
    </li>
=======
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
    </ul>
   
  
  </div>
  )
}
export default Navbar; 