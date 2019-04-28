import React from "react";
import "../../components/images/earthmonth.png";
<<<<<<< HEAD
import './wastereduction.css';
import wasteImg from '../../components/images/earthmonth.png';
import Navbar from "../../components/navbar/navbar";
=======
import Card from '../../components/card/card';
import './wastereduction.css';
import wasteImg from '../../components/images/earthmonth.png';
// import Navbar from "../../components/navbar/navbar";
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb


export const Wastereduction = () => {
    return (
<<<<<<< HEAD
        <div className="overlay wasteImg" style={{ backgroundImage: `url(${wasteImg})` }}>
            <div className={`cardBackground`}>

                <div className="imagecard">
                    <Navbar />
                </div>

                <div className="bg-dark text-white ">
                    <div>

                        <img src={wasteImg} alt='tips' className="tips" />
                    </div>
                </div>
            </div>



        </div>
=======
        <div className="overlay wasteImg"  style={{backgroundImage:`url(${wasteImg})`}}>
             <Card>
             <img src={wasteImg} alt='tips' className="tips" />
             </Card>
        </div> 
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
    )
};
export default Wastereduction;