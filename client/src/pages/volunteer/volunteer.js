import React from "react";
import "./volunteer.css";
import Card from "../../components/card/card";
// import Navbar from '../../components/navbar/navbar';
// import volunteerImg from '../../components/images/boxedwater.jpg';

import Calendar from '../../components/calendar/Calendar';
import '../../components/calendar/calendar.css';


export const Volunteer = () => {
    return (   
        <div id="backgroundimage1" className="overlay volunteerImg">
            <h1> Join a Cleanup!</h1>
            <h3>Upcoming Cleanup Events!</h3>
            
            <Card cardImage="volunteerImg">
             <Calendar />
            </Card>
        </div>
    );
};

export default Volunteer; 