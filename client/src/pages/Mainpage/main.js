import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/Nature.jpg"
import "./style.css";
import mainImg from "../../components/images/Nature.jpg";
import Card from "../../components/card/card";

export const Main = ()  => {
   return(
        <React.Fragment>
          <div id='backgroundimage' className="overlay"  style={{backgroundImage:`url(${mainImg})`}}></div>
          <div id="contentCard"><Card cardImage="mainImg"/></div>
          
        </React.Fragment>
    );
  
};

export default Main; 


