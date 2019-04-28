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
        <Link className="nav-link navblack" to="/createevent">Create Event</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navblack" to="/calendar">Volunteer</Link>
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
    </ul>
   
  
  </div>
  )
}
export default Navbar; 