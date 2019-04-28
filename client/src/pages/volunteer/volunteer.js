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
            
            
            <Card cardImage="volunteerImg">
             <Calendar />
            </Card>
        </div>
    );
};

export default Volunteer; 
