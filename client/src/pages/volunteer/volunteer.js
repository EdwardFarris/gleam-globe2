import React from "react";
import "./volunteer.css";
import Card from "../../components/card/card";
// import Navbar from '../../components/navbar/navbar';
// import volunteerImg from '../../components/images/boxedwater.jpg';

import Calendar from '../../components/calendar/Calendar';
import '../../components/calendar/calendar.css';
<<<<<<< HEAD
import CreateEvent from "../../components/createEvent/EventFormContainer";
=======

>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb

export const Volunteer = () => {
    return (   
        <div id="backgroundimage1" className="overlay volunteerImg">
<<<<<<< HEAD
            <h1>Join a cleanup</h1>
           
            <h3>Upcoming Cleanup Events</h3>

            <Card cardImage="volunteerImg">
            <Calendar />
             <h2>Register for a trash pickup. Help our community!</h2>
             <CreateEvent />
=======
            
            
            <Card cardImage="volunteerImg">
             <Calendar />
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
            </Card>
        </div>
    );
};

export default Volunteer; 
