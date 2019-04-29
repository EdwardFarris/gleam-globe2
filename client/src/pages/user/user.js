import React from "react";
import "../../components/images/userpg.jpg";
import "./user.css";
import user2Img from "../../components/images/userpg.jpg";
import Card from "../../components/card/card";


export const User = () => {
  return (
    <React.Fragment>
      <div id='backgroundimage' className="overlay" style={{ backgroundImage: `url(${user2Img})` }}></div>
      <div id="contentCard">
        <div id="cardtext">

          <Card
            cardImage="user2Img">
            
            </Card>
        </div>
      </div>

    </React.Fragment>
  );

};

export default User;

