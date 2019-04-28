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
            <h7>Contact The Gleam Globe Team!</h7><br></br>
            <br></br>
            <h8>348 N Oak Cir<br></br>
            Gilbert, AZ 85233<br></br>
            United States<br></br>
            <br></br>
            Email us at <a href="mailto:gleamglobe@gmail.com">gleamglobe@gmail.com</a></h8>
           <br></br>
            <br></br>
          <h8>About Us:</h8><br></br>
          <br></br>
          <h9>Our founders Christine, Viviana, Christian, Justin, and the Adams came together to form a non profit organization called Gleam Globe to help save the world.
                  &nbsp;We here at Gleam Globe wanted to create a space where like-minded people could come together in a social space to post before and after pictures of
                     their work, create events, and be social while helping to protect the environment.  &nbsp; Because if you save the world and you dont post about it, what's
                        the point?</h9>
            </Card>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Aboutus;
