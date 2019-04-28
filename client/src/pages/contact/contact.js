import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/contact.jpg";
import './contact.css';
import contactImg from "../../components/images/contact.jpg";
import Card from "../../components/card/card";

export const Contact = () => {
<<<<<<< HEAD
  return (
    <React.Fragment>
   
      <div id='backgroundimage4' className="overlay" style={{ backgroundImage: `url(${contactImg})` }}></div>
      <div id="contentCard">
        <Card cardImage="contactImg" title='The products of our own creation are purely a reflection of ourselves.'>
        
        
        <h1>CONTACT US!</h1>
        <h4>Want to know more about our mission? Whatever it is, we'd love to hear from you! Use the form below and our team will do our best to respond within 24 business hours.</h4>
        <div class="container">
        <form id="form" className="form">

            <label for="email" className="mr-sm-2">Name:</label>
            <input type="email" className="form-control mb-2 mr-sm-2" id="email" />
            <label for="pwd" className="mr-sm-2">Email:</label>
            <input type="password" className="form-control mb-2 mr-sm-2" id="pwd" />
            <div className="form-check mb-2 mr-sm-2">
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
            </div>
            <div id="submit">
            <button id="submit" type="submit" className="btn btn-primary mb-2">Submit</button>
          </div>
            </form>
</div>
        </Card>
      </div>
    </React.Fragment>
  );

};

export default Contact;




// <React.Fragment>
//       <div id='backgroundimage4' className="overlay" style={{ backgroundImage: `url(${contactImg})` }}></div>
//       <div id="contentCard">
//       <Card cardImage="contactImg" title='The products of our own creation are purely a reflection of ourselves.'>

//         <adress id="addy">
//           <h3>Contact The Gleam Globe Team!</h3>
//           Email us at <a href="mailto:gleamglobe@gmail.com">gleamglobe.com</a>.<br></br>
//           348 N Oak Cir<br></br>
//           Gilbert, AZ 85233<br></br>
//           United States<br></br>
//           <br></br>
//           <u>About Us:</u><br />
//           <br />

//           Our founders Christine, Viviana, Christian, Justin, and the Adams came together to form a non profit organization called Gleam Globe to help save the world.
//              &nbsp;We here at Gleam Globe wanted to create a space where like-minded people could come together in a social space to post before and after pictures of
//              their work, create events, and be social while helping to protect the environment.  &nbsp; Because if you save the world and you dont post about it, what's
//               the point?
//             </adress>
//       </Card>
//       </div>
//     </React.Fragment>
=======
    return (
        <React.Fragment>
          <div id='backgroundimage4' className="overlay"  style={{backgroundImage:`url(${contactImg})`}}></div>
          <div id="contentCard"><Card cardImage="contactImg"/></div>
          
        </React.Fragment>
    );
  
};

export default Contact; 
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb

