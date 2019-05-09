import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/userpage.jpg";
import "./aboutus.css";
import userImg from "../../components/images/userpage.jpg";
import Card from "../../components/card/card";
import { Link } from "react-router-dom";

export const Aboutus = () => {
  return (
    <React.Fragment>
      <div id='backgroundimage' className="overlay" style={{ backgroundImage: `url(${userImg})` }}></div>
      <div id="contentCard">
        <div id="cardtext">

          <Card
            cardImage="userImg">
            <br></br>
            <br></br>
            <br></br>
            <h3>Contact The Gleam Globe Team!</h3><br></br>
            
            <h8><br></br>348 N Oak Cir<br></br>
            Gilbert, AZ 85233<br></br>
            United States<br></br><br></br>
            Email us at <a href="mailto:gleamglobe@gmail.com">gleamglobe@gmail.com</a></h8>
           <br></br>
            
          <h1>About Us:</h1><br></br>
        
          <h9>Our founders Christine, Viviana, Christian, Justin, and Adam came together to <br></br>
          form a non profit organization called Gleam Globe to help save the world.<br></br>
                  &nbsp;We here at Gleam Globe wanted to create a space where like-minded people<br></br>
                   could come together in a social space to post before and after pictures of<br></br>
                     their work, create events, and be social while helping to protect the environment.<br></br>
                      </h9>
            </Card>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Aboutus;
