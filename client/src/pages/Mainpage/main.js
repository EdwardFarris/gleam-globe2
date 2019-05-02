import React from "react";
// import Navbar from "../../components/navbar/navbar";
import "../../components/images/Nature.jpg"
import "./style.css";
import mainImg from "../../components/images/Nature.jpg";
import Card from "../../components/card/card";
import uswaste from "../../components/images/mountain.jpg";
import cando from "../../components/images/whatwecando.jpg";


 export const Main = () => {
  return (
    <React.Fragment>
      <div id='backgroundimage' className="overlay" style={{ backgroundImage: `url(${mainImg})` }}></div>
      <div id="contentCard">
        <div id="cardtext">
         
           <Card
            cardImage="mainImg"
            title='The products of our own creation are purely a reflection of ourselves.'>
            <h5><br></br>Let's Meet Up!<br ></br> We need volunteers!<br ></br>
              Let's clean our future one pound of trash at a time!
            <h6>How to Become one of us</h6>This is the fun part! </h5>
            <div className="flex-container">
             <div><i class="fas fa-recycle"></i>  Go outside on a trail,<br ></br>
               in your neighboorhood, anywhere! Find some trash. Pick it up.</div><br></br>
                <div><i class="fas fa-recycle"></i> Weigh your trash. Record your impact</div><br></br>
                <div><i class="fas fa-recycle"></i> Do a Happy Dance! Seriously. Just try it. Thank us later.</div><br></br>
                <div><i class="fas fa-recycle"></i> Share your impact on social media. Use Hashtag #gleamglobe</div><br></br>
              </div>

             <img src={cando} alt="cando" className="cando" />

             <img src={uswaste} alt="uswaste" className="uswaste" />
          </Card>
        </div>
      </div>

     </React.Fragment>
  );

 };

 export default Main;