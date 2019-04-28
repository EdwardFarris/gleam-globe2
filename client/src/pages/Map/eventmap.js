<<<<<<< HEAD
// import React from "./node_modules/react";
import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/earth.jpg";
=======
import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/earth.jpg"
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
import "./map.css";
import mapImg from "../../components/images/earth.jpg";
import Card from "../../components/card/card";
import MapContainer from '../../components/map/MapContainer';

<<<<<<< HEAD

export const Eventmap = () => {
  return (
    <React.Fragment>
          <div id='backgroundimage5' className="overlay"  style={{backgroundImage:`url(${mapImg})`}}></div>
          <div id="contentCard"><Card cardImage="mapImg" >
          
=======
export const Eventmap = ()  => {
   return(
        <React.Fragment>
          <div id='backgroundimage5' className="overlay"  style={{backgroundImage:`url(${mapImg})`}}></div>
          <div id="contentCard"><Card cardImage="mapImg" >
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
          <MapContainer />
          </Card >
          </div>
          
        </React.Fragment>
    );
  
};

<<<<<<< HEAD
export default Eventmap; 
=======
export default Eventmap; 


>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
