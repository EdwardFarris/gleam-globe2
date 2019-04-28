import React from "react";
import "../../components/images/earthmonth.png";
import Card from '../../components/card/card';
import './wastereduction.css';
import wasteImg from '../../components/images/earthmonth.png';
// import Navbar from "../../components/navbar/navbar";


export const Wastereduction = () => {
    return (
        <div className="overlay wasteImg"  style={{backgroundImage:`url(${wasteImg})`}}>
             <Card>
             <img src={wasteImg} alt='tips' className="tips" />
             </Card>
        </div> 
    )
};
export default Wastereduction;