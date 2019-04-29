import React from "react";
import "./volunteer.css";
import Card from "../../components/card/card";
// import Navbar from '../../components/navbar/navbar';
import arizonaImg from '../../components/images/arizona.jpg';

import Calendar from '../../components/calendar/Calendar';
import '../../components/calendar/calendar.css';

import CreateEvent from "../../components/createEvent/EventFormContainer";


export const Volunteer = () => {
    return (   
        <div id="backgroundimage1" className="overlay arizonaImg">
            <h1> Join a Cleanup!</h1>
            <h3>Upcoming Cleanup Events!</h3>
            
            <Card cardImage="arizonaImg">
             <Calendar />
            </Card>
        </div>
    );
};

export default Volunteer; 