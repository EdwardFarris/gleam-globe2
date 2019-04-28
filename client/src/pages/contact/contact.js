import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/contact.jpg";
import './contact.css';
import contactImg from "../../components/images/contact.jpg";
import Card from "../../components/card/card";

export const Contact = () => {
    return (
        <React.Fragment>
          <div id='backgroundimage4' className="overlay"  style={{backgroundImage:`url(${contactImg})`}}></div>
          <div id="contentCard"><Card cardImage="contactImg"/></div>
          
        </React.Fragment>
    );
  
};

export default Contact; 

