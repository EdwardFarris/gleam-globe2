import React from "react";
import Calendar from "../../components/calendar/Calendar";
import "../../components/images/arizona.jpg";
import "./volunteer.css";
import arizonaImg from "../../components/images/arizona.jpg";
import Card from "../../components/card/card";
import { Link } from "react-router-dom";

export const Volunteer = () => {
  return (
    <React.Fragment>
      <div id='backgroundimage' className="overlay" style={{ backgroundImage: `url(${arizonaImg})` }}></div>
      <div id="contentCard">
        <div id="cardtext">

          <Card
            cardImage="arizonaImg">
            <h1> Join a Cleanup!</h1>
            <h3>Upcoming Cleanup Events!</h3>
           <Calendar />
            </Card>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Volunteer;
